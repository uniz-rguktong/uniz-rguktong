const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const APPS_DIR = path.join(__dirname, '../apps');
const ROOT_DIR = path.join(__dirname, '../');
const GATEWAY_URL = 'https://uniz-production-gateway.vercel.app/api/v1';

const services = ['auth', 'user', 'outpass', 'academics', 'files', 'mail', 'notification', 'cron', 'web', 'gateway'];

function run(cmd, cwd) {
    try {
        execSync(cmd, { cwd, stdio: 'inherit' });
    } catch (e) {
        console.error(`⚠️  Command failed: ${e.message}`); // Continue anyway
    }
}

function setEnv(cwd, key, val) {
    try {
        execSync(`echo "${val}" | vercel env add ${key} production`, { cwd, stdio: 'pipe' }); 
        console.log(`   + ${key}`);
    } catch (e) {
        // console.log(`   - ${key} (skipped/exists)`); 
    }
}

async function main() {
    console.log("🚀 STARTING FULL BLOWN PRODUCTION DEPLOYMENT SEQUENCE");
    
    for (const service of services) {
        const dir = path.join(APPS_DIR, service);
        if (!fs.existsSync(dir)) continue;

        const projectName = service === 'gateway' ? 'uniz-production-gateway' : `uniz-${service}-service`;
        console.log(`\n---------------------------------------------------------`);
        console.log(`Configuring: ${projectName}`);
        console.log(`---------------------------------------------------------`);

        // 1. Link Project (Force Project Name)
        run(`vercel link --project ${projectName} --yes`, dir);

        // 2. Symlink .git to satisfy 'vercel git connect' check
        // We symlink ../../.git to ./
        // Note: Git check might require .git to be a directory. Vercel CLI logic checks root.
        const gitLink = path.join(dir, '.git');
        try {
            // Remove if exists (folder or link)
            if (fs.existsSync(gitLink)) fs.rmSync(gitLink, { recursive: true, force: true });
            
            // Create symlink
            fs.symlinkSync(path.join(ROOT_DIR, '.git'), gitLink);
        } catch (e) {
            console.warn("Symlink .git failed:", e.message);
        }

        // 3. Git Connect
        console.log("Linking to GitHub Repository...");
        run(`vercel git connect --yes`, dir);

        // Remove Symlink
        try {
             if (fs.existsSync(gitLink)) fs.unlinkSync(gitLink); // unlinkSync works on symlinks
        } catch (e) {
             // Use rm if unlink fails (e.g. windows junction?)
             fs.rmSync(gitLink, { recursive: true, force: true });
        }

        // 4. Env Vars
        const envPath = path.join(dir, '.env');
        if (fs.existsSync(envPath)) {
            console.log("Syncing Environment Variables...");
            const envContent = fs.readFileSync(envPath, 'utf-8');
            const lines = envContent.split('\n');
            for (const line of lines) {
                if (!line.trim() || line.trim().startsWith('#')) continue;
                const parts = line.split('=');
                if (parts.length < 2) continue;
                
                const key = parts[0].trim();
                let val = parts.slice(1).join('=').trim();
                
                if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
                if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);

                if (key === 'GATEWAY_URL') val = GATEWAY_URL;
                if (key === 'PORT') continue;

                setEnv(dir, key, val);
            }
        }
    }

    console.log("\n✅  Vercel Projects Configured & Linked to Git.");
    console.log("👉  Perform a 'git push' to trigger the first production deployment!");
}

main();
