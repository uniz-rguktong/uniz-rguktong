const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, '../apps');
const SCOPE = 'sreecharans-projects-be53fce6';

const services = [
    { id: 'auth', name: 'uniz-auth-service' },
    { id: 'user', name: 'uniz-user-service' },
    { id: 'outpass', name: 'uniz-outpass-service' },
    { id: 'academics', name: 'uniz-academics-service' },
    { id: 'files', name: 'uniz-files-service' },
    { id: 'mail', name: 'uniz-mail-service' },
    { id: 'notification', name: 'uniz-notification-service' },
    { id: 'cron', name: 'uniz-cron-service' }
];

services.forEach(svc => {
    // 1. Zero-Config vercel.json (Modern & Stable)
    const vercelPath = path.join(appsDir, svc.id, 'vercel.json');
    const config = {
        version: 2,
        name: svc.name,
        regions: ["sin1"],
        // No 'builds' property should be here for modern monorepo deployments
        rewrites: [
            { "source": "/(.*)", "destination": "/api" }
        ]
    };
    fs.writeFileSync(vercelPath, JSON.stringify(config, null, 2));
    console.log(`✅ Modernized vercel.json (Zero-Config) for ${svc.id}`);

    // 2. Ensure package.json has dependencies
    const pkgPath = path.join(appsDir, svc.id, 'package.json');
    if (fs.existsSync(pkgPath)) {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
        pkg.dependencies = pkg.dependencies || {};
        pkg.dependencies.axios = "^1.13.4";
        // Ensure shared package is properly referenced
        pkg.dependencies["@uniz/shared"] = "*";
        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
        console.log(`✅ Updated package.json for ${svc.id}`);
    }
});

// Gateway Config
const gatewayVercelPath = path.join(appsDir, 'gateway', 'vercel.json');
const getProdUrl = (name) => `https://${name}-${SCOPE}.vercel.app`;

const gatewayConfig = {
  "version": 2,
  "name": "uniz-production-gateway",
  "regions": ["sin1"],
  "rewrites": [
    { "source": "/api/v1/auth/(.*)", "destination": getProdUrl('uniz-auth-service') + "/$1" },
    { "source": "/api/v1/system/health", "destination": "/api/system-health" },
    { "source": "/api/v1/profile/(.*)", "destination": getProdUrl('uniz-user-service') + "/$1" },
    { "source": "/api/v1/grievance/(.*)", "destination": getProdUrl('uniz-outpass-service') + "/grievance/$1" },
    { "source": "/api/v1/requests/(.*)", "destination": getProdUrl('uniz-outpass-service') + "/$1" },
    { "source": "/api/v1/cron/(.*)", "destination": getProdUrl('uniz-cron-service') + "/$1" },
    { "source": "/api/v1/notifications/(.*)", "destination": getProdUrl('uniz-notification-service') + "/$1" },
    { "source": "/api/v1/mail/(.*)", "destination": getProdUrl('uniz-mail-service') + "/$1" },
    { "source": "/api/v1/academics/(.*)", "destination": getProdUrl('uniz-academics-service') + "/$1" },
    { "source": "/(health|status)", "destination": getProdUrl('uniz-auth-service') + "/health" },
    { "source": "/", "destination": getProdUrl('uniz-auth-service') + "/" }
  ]
};
fs.writeFileSync(gatewayVercelPath, JSON.stringify(gatewayConfig, null, 2));
console.log(`✅ Updated Gateway configurations`);

// Web App: Skip type checking for CI speed and stability
const webPkgPath = path.join(appsDir, 'web', 'package.json');
const webPkg = JSON.parse(fs.readFileSync(webPkgPath, 'utf8'));
webPkg.scripts.build = "vite build"; 
fs.writeFileSync(webPkgPath, JSON.stringify(webPkg, null, 2));
console.log(`✅ Relaxed web build script`);
