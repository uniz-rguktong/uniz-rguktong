const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, '../apps');
const services = ['auth', 'user', 'outpass', 'academics', 'files', 'mail', 'cron', 'notification', 'gateway'];

services.forEach(svc => {
    const svcDir = path.join(appsDir, svc);
    
    // 1. Create a dummy public directory to satisfy Vercel's "No Output Directory" check
    const publicDir = path.join(svcDir, 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }
    fs.writeFileSync(path.join(publicDir, 'index.html'), `<html><body>UniZ ${svc} service is running</body></html>`);
    console.log(`✅ Created dummy public folder for ${svc}`);

    // 2. Modern but explicit vercel.json
    const vercelPath = path.join(svcDir, 'vercel.json');
    const isGateway = svc === 'gateway';
    
    const config = {
        version: 2,
        // No 'name' property as it's deprecated
        regions: ["sin1"],
        builds: isGateway ? [] : [
            {
                src: "api/index.ts",
                use: "@vercel/node"
            }
        ],
        routes: isGateway ? undefined : [
            { "src": "/(.*)", "dest": "/api/index.ts" }
        ],
        // If it's a gateway, we keep the complex rewrites we had before
        outputDirectory: "public"
    };

    if (isGateway) {
        // For gateway, we just need to ensure the existing rewrites are preserved 
        // but the build doesn't fail due to missing output.
        const currentConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
        currentConfig.outputDirectory = "public";
        currentConfig.builds = []; // No build needed for pure redirects
        fs.writeFileSync(vercelPath, JSON.stringify(currentConfig, null, 2));
    } else {
        fs.writeFileSync(vercelPath, JSON.stringify(config, null, 2));
    }
    
    console.log(`✅ Updated vercel.json for ${svc}`);
});

// Web special case
const webDir = path.join(appsDir, 'web');
const webVercelPath = path.join(webDir, 'vercel.json');
const webConfig = JSON.parse(fs.readFileSync(webVercelPath, 'utf8'));
webConfig.outputDirectory = "dist"; // Vite builds to dist
fs.writeFileSync(webVercelPath, JSON.stringify(webConfig, null, 2));
console.log(`✅ Verified web output directory`);
