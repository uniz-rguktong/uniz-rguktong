const fs = require('fs');
const path = require('path');

const APPS_DIR = path.join(__dirname, '../apps');
const EXCLUDES = ['gateway'];
const FRONTEND = ['web'];

async function main() {
    const apps = fs.readdirSync(APPS_DIR).filter(d => {
        const full = path.join(APPS_DIR, d);
        return fs.statSync(full).isDirectory() && !EXCLUDES.includes(d);
    });

    for (const app of apps) {
        console.log(`Processing ${app}...`);
        const appPath = path.join(APPS_DIR, app);
        
        if (FRONTEND.includes(app)) {
            // Frontend Config
            const vercelJson = {
                "version": 2,
                "name": "uniz-web",
                "regions": ["sin1"],
                "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
            };
            fs.writeFileSync(path.join(appPath, 'vercel.json'), JSON.stringify(vercelJson, null, 2));
            console.log(`  - Specially configured Frontend (SPA).`);
        } else {
            // Backend Config
            // 1. Check src/index.ts
            const indexPath = path.join(appPath, 'src/index.ts');
            if (fs.existsSync(indexPath)) {
                let content = fs.readFileSync(indexPath, 'utf-8');
                
                // Wrap app.listen
                // Regex to find app.listen(PORT, ...)
                // We assume matches simple `app.listen(PORT, () => { ... })`
                // We'll wrap it in `if (!process.env.VERCEL) { ... }`
                
                if (!content.includes('if (!process.env.VERCEL)')) {
                    // Simple regex replacement
                    // Matches: app.listen( ... ); OR app.listen( ... )
                    // Note: This relies on standard formatting.
                    
                    const match = content.match(/app\.listen\s*\(/);
                    if (match) {
                        const idx = match.index;
                        // Determine end of verify block is hard without parser.
                        // But usually it's at end of file.
                        // We will just PREPEND the check and brace, and APPEND brace at end?
                        // No, unsafe.
                        // Better: Replace `app.listen` with `if (!process.env.VERCEL) app.listen`?
                        // If it's multiline?
                        // `if (!process.env.VERCEL) { app.listen(PORT, () => { ... }); }`
                        
                        // Let's try to match the whole block? 
                        // Often: app.listen(PORT, () => {\n  console.log(...);\n});
                        
                        content = content.replace(/(app\.listen\([\s\S]*\}\);)/, `if (!process.env.VERCEL) {\n  $1\n}`);
                        
                        // Also Add Export
                        if (!content.includes('export default app')) {
                            content += '\n\nexport default app;';
                        }
                        
                        fs.writeFileSync(indexPath, content);
                        console.log(`  - Modified src/index.ts`);
                    } else {
                        console.warn(`  ! Could not find app.listen in ${app}/src/index.ts`);
                    }
                } else {
                    console.log(`  - src/index.ts already refactored.`);
                }

                // 2. Create api/index.ts
                const apiDir = path.join(appPath, 'api');
                if (!fs.existsSync(apiDir)) fs.mkdirSync(apiDir);
                
                fs.writeFileSync(path.join(apiDir, 'index.ts'), 
`import app from '../src/index';
export default app;
`);
                console.log(`  - Created api/index.ts`);

                // 3. Create vercel.json
                const serviceName = `uniz-${app}-service`;
                const vercelJson = {
                    "version": 2,
                    "name": serviceName,
                    "regions": ["sin1"],
                    "builds": [
                         {
                            "src": "api/index.ts",
                            "use": "@vercel/node"
                         }
                    ],
                    "routes": [
                        {
                            "src": "/(.*)",
                            "dest": "/api/index.ts"
                        }
                    ]
                };
                fs.writeFileSync(path.join(appPath, 'vercel.json'), JSON.stringify(vercelJson, null, 2));
                console.log(`  - Created vercel.json`);
            } else {
                 console.warn(`  ! No src/index.ts found in ${app}`);
            }
        }
    }
}

main();
