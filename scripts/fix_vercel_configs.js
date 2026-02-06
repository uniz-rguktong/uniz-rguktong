const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, '../apps');
const apps = fs.readdirSync(appsDir);

// Services that are Node APIs and need ncc bundling
const apiServices = [
  'academics', 'auth', 'cron', 'files', 'gateway', 'mail', 'notification', 'outpass', 'user'
];

apps.forEach(app => {
  if (app === '.DS_Store') return;

  const vercelJsonPath = path.join(appsDir, app, 'vercel.json');
  
  if (fs.existsSync(vercelJsonPath)) {
    try {
      const config = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf8'));
      let changed = false;

      // Logic for API Services
      if (apiServices.includes(app)) {
        // 1. Remove legacy 'builds'
        if (config.builds) {
           console.log(`[${app}] Removing legacy 'builds' config`);
           delete config.builds;
           changed = true;
        }
        
        // 2. Remove 'outputDirectory' if present (should be strict)
        if (config.outputDirectory) {
           console.log(`[${app}] Removing outputDirectory`);
           delete config.outputDirectory;
           changed = true;
        }

        // 3. Update Routes to point to Bundled JS
        if (config.routes) {
          config.routes.forEach(route => {
             // If source covers everything and dest was pointing to api/index.ts
             if (route.src === '/(.*)' && (route.dest === '/api/index.ts' || route.dest === 'api/index.ts')) {
                console.log(`[${app}] Updating route dest to /api/index.js (Bundled)`);
                route.dest = '/api/index.js';
                changed = true;
             }
          });
        }
      }

      if (changed) {
        fs.writeFileSync(vercelJsonPath, JSON.stringify(config, null, 2));
        console.log(`✅ Updated ${app}/vercel.json`);
      } else {
        console.log(`[${app}] Config already verified.`);
      }

    } catch (e) {
      console.error(`Error processing ${app}/vercel.json:`, e);
    }
  }
});
