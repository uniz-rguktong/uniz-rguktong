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
    const svcDir = path.join(appsDir, svc.id);
    const vercelPath = path.join(svcDir, 'vercel.json');
    
    // 1. Clean Zero-Config vercel.json for Serverless Functions
    const config = {
        version: 2,
        regions: ["sin1"],
        // Simple rewrites, Vercel will auto-detect the api/ directory
        rewrites: [
            { "source": "/(.*)", "destination": "/api" }
        ]
    };
    fs.writeFileSync(vercelPath, JSON.stringify(config, null, 2));
    
    // 2. Add a .vercel-build script to package.json to prevent failing default builds
    const pkgPath = path.join(svcDir, 'package.json');
    if (fs.existsSync(pkgPath)) {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
        pkg.scripts = pkg.scripts || {};
        // vercel-build is what Vercel runs. We'll set it to just do prisma if needed, or nothing.
        pkg.scripts["vercel-build"] = pkg.id === 'auth' || pkg.id === 'academics' ? "prisma generate" : "echo 'no build needed'";
        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    }
});

// Update Gateway Health Check URLs
const healthPath = path.join(appsDir, 'gateway', 'api', 'system-health.ts');
if (fs.existsSync(healthPath)) {
    let content = fs.readFileSync(healthPath, 'utf8');
    const getUrl = (id) => `https://uniz-${id}-service-${SCOPE}.vercel.app/health`;
    
    content = content.replace(/https:\/\/uniz-auth-service\.vercel\.app\/health/g, getUrl('auth'));
    content = content.replace(/https:\/\/uniz-user-service\.vercel\.app\/health/g, getUrl('user'));
    content = content.replace(/https:\/\/uniz-academics-service\.vercel\.app\/health/g, getUrl('academics'));
    content = content.replace(/https:\/\/uniz-outpass-service\.vercel\.app\/health/g, getUrl('outpass'));
    content = content.replace(/https:\/\/uniz-files-service\.vercel\.app\/health/g, getUrl('files'));
    content = content.replace(/https:\/\/uniz-mail-service\.vercel\.app\/health/g, getUrl('mail'));
    content = content.replace(/https:\/\/uniz-notification-service\.vercel\.app\/health/g, getUrl('notification'));
    content = content.replace(/https:\/\/uniz-cron-service\.vercel\.app\/health/g, getUrl('cron'));
    
    fs.writeFileSync(healthPath, content);
    console.log(`✅ Updated Gateway health check URLs to production aliases`);
}
