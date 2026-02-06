const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, '../apps');
const services = ['auth', 'user', 'outpass', 'academics', 'files', 'mail', 'cron', 'notification', 'gateway'];

services.forEach(svc => {
    const svcDir = path.join(appsDir, svc);
    const vercelPath = path.join(svcDir, 'vercel.json');
    
    // Create a public folder if it doesn't exist (needed for Vercel's sanity)
    const publicDir = path.join(svcDir, 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }
    fs.writeFileSync(path.join(publicDir, 'index.html'), `<html><body>UniZ ${svc} is alive</body></html>`);

    let config = {
        version: 2,
        regions: ["sin1"]
    };

    if (svc === 'gateway') {
        // Gateway has custom rewrites we must preserve
        const current = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
        config.rewrites = current.rewrites;
        config.builds = [
            { "src": "api/*.ts", "use": "@vercel/node" }
        ];
    } else {
        config.builds = [
            { "src": "api/index.ts", "use": "@vercel/node" }
        ];
        config.routes = [
            { "src": "/(.*)", "dest": "/api/index.ts" }
        ];
    }

    // Force outputDirectory to public
    config.outputDirectory = "public";

    fs.writeFileSync(vercelPath, JSON.stringify(config, null, 2));
    console.log(`✅ Standardized vercel.json for ${svc}`);
});
