const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, '../apps');
const apps = fs.readdirSync(appsDir);

apps.forEach(app => {
  const pkgPath = path.join(appsDir, app, 'package.json');

  if (!fs.existsSync(pkgPath)) return;

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  let changed = false;

  const sections = ['dependencies', 'devDependencies', 'peerDependencies'];

  sections.forEach(section => {
    if (pkg[section] && pkg[section]['@uniz/shared']) {
      // Use "*" instead of "workspace:*" for native npm workspaces support
      if (pkg[section]['@uniz/shared'] !== '*') {
        pkg[section]['@uniz/shared'] = '*';
        changed = true;
      }
    }
  });

  // Ensure it exists in dependencies if missing and it's a microservice
  const isMicroservice = !['gateway', 'web'].includes(app);
  if (
    isMicroservice &&
    (!pkg.dependencies || !pkg.dependencies['@uniz/shared']) &&
    fs.existsSync(path.join(appsDir, app, 'src'))
  ) {
    pkg.dependencies = pkg.dependencies || {};
    pkg.dependencies['@uniz/shared'] = '*';
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    console.log(`✅ Normalized ${app}/package.json to use "*"`);
  }
});
