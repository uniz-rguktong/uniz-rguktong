const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, '../apps');
const services = ['auth', 'user', 'outpass', 'academics', 'files', 'mail', 'notification', 'cron', 'gateway'];

services.forEach(svc => {
    const pkgPath = path.join(appsDir, svc, 'package.json');
    if (fs.existsSync(pkgPath)) {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
        if (pkg.dependencies && !pkg.dependencies.axios) {
            pkg.dependencies.axios = "^1.13.4";
            fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
            console.log(`✅ Added axios to ${svc}`);
        }
    }

    const vercelPath = path.join(appsDir, svc, 'vercel.json');
    // Modern vercel.json for Express apps in monorepo
    const modernVercel = {
        version: 2,
        name: svc === 'gateway' ? 'uniz-production-gateway' : `uniz-${svc}-service`,
        regions: ["sin1"],
        rewrites: [
            { "source": "/(.*)", "destination": "/api" }
        ]
    };

    fs.writeFileSync(vercelPath, JSON.stringify(modernVercel, null, 2));
    console.log(`✅ Modernized vercel.json for ${svc}`);
});

// Special case for apps/web - ensure output directory is known
const webVercelPath = path.join(appsDir, 'web', 'vercel.json');
const webVercel = {
    version: 2,
    name: "uniz-web",
    regions: ["sin1"],
    outputDirectory: "dist",
    rewrites: [
        { "source": "/(.*)", "destination": "/index.html" }
    ]
};
fs.writeFileSync(webVercelPath, JSON.stringify(webVercel, null, 2));
console.log(`✅ Modernized vercel.json for web`);
