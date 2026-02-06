const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, '../apps');
const services = ['auth', 'user', 'outpass', 'academics', 'files', 'mail', 'cron', 'notification', 'gateway'];

services.forEach(svc => {
    const svcDir = path.join(appsDir, svc);
    
    // 1. Remove the dummy public folder hacks
    const publicDir = path.join(svcDir, 'public');
    if (fs.existsSync(publicDir)) {
        fs.rmSync(publicDir, { recursive: true, force: true });
        console.log(`🗑️ Removed dummy public folder for ${svc}`);
    }

    // 2. Apply a clean, robust vercel.json for monorepo APIs
    const vercelPath = path.join(svcDir, 'vercel.json');
    const isGateway = svc === 'gateway';
    
    let config;
    if (isGateway) {
        // Preserving gateway rewrites but cleaning up structure
        const current = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
        config = {
            version: 2,
            regions: ["sin1"],
            rewrites: current.rewrites,
            // Explicitly tell Vercel there is no build/output needed for this gateway
            buildCommand: null,
            outputDirectory: null
        };
    } else {
        config = {
            version: 2,
            regions: ["sin1"],
            // Use legacy builds property for maximum compatibility with serverless functions
            builds: [
                {
                    src: "api/index.ts",
                    use: "@vercel/node"
                }
            ],
            routes: [
                { "src": "/(.*)", "dest": "/api/index.ts" }
            ],
            // This is the magic: tell Vercel build to not expect a folder
            buildCommand: null,
            outputDirectory: null
        };
    }

    fs.writeFileSync(vercelPath, JSON.stringify(config, null, 2));
    console.log(`✅ Applied clean vercel.json to ${svc}`);
});

// Update web app to be standard
const webVercelPath = path.join(appsDir, 'web', 'vercel.json');
const webConfig = JSON.parse(fs.readFileSync(webVercelPath, 'utf8'));
delete webConfig.outputDirectory; // Vercel auto-detects Vite 'dist'
fs.writeFileSync(webVercelPath, JSON.stringify(webConfig, null, 2));
console.log(`✅ Reset web vercel.json to defaults`);
