const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const SCOPE = 'sreecharans-projects-be53fce6';
const GATEWAY_VERCEL_JSON = path.join(__dirname, '../apps/gateway/vercel.json');
const ENV_SCRIPT = path.join(__dirname, 'update_envs.sh');

const services = [
  'auth', 'user', 'outpass', 'academics', 'files', 'mail', 
  'notification', 'cron', 'web', 'gateway'
];

function getUrl(service) {
  const project = service === 'gateway' ? 'uniz-production-gateway' : `uniz-${service}-service`;
  try {
    const authPath = path.join(os.homedir(), 'Library/Application Support/com.vercel.cli/auth.json');
    const token = JSON.parse(fs.readFileSync(authPath, 'utf8')).token;
    
    // Corrected command: vercel list [project] (removed --limit)
    const cmd = `vercel list ${project} --prod --token ${token} --scope ${SCOPE}`;
    const output = execSync(cmd, { encoding: 'utf-8' });
    
    // Parse output
    const match = output.match(/(https:\/\/[^\s]+\.vercel\.app)/);
    return match ? match[1] : null;
  } catch (e) {
    console.error(`Failed to fetch URL for ${service}: ${e.message}`);
    return null;
  }
}

function updateGateway(urls) {
  if (!fs.existsSync(GATEWAY_VERCEL_JSON)) return;
  
  let content = fs.readFileSync(GATEWAY_VERCEL_JSON, 'utf-8');
  let json = JSON.parse(content);
  
  if (json.rewrites) {
    json.rewrites = json.rewrites.map(r => {
      for (const [svc, url] of Object.entries(urls)) {
        if (!url) continue;
        const defaultHost = `uniz-${svc}-service.vercel.app`;
        // Replace ONLY if we have a real URL and it's different/specific
        if (r.destination.includes(defaultHost)) {
           const domain = url.replace('https://', '');
           r.destination = r.destination.replace(defaultHost, domain);
           console.log(`Updated Gateway Rewrite: ${svc} -> ${domain}`);
        }
      }
      return r;
    });
    
    fs.writeFileSync(GATEWAY_VERCEL_JSON, JSON.stringify(json, null, 2));
    console.log("✅ Updated apps/gateway/vercel.json");
  }
}

async function main() {
  console.log("🔍 Diagnosing Vercel Deployments...");
  
  const urls = {};
  for (const svc of services) {
    process.stdout.write(`Fetching URL for ${svc}... `);
    const url = getUrl(svc);
    if (url) {
      console.log(url);
      urls[svc] = url;
    } else {
      console.log("NOT FOUND");
    }
  }
  
  updateGateway(urls);
  
  const envMap = {
    'auth': 'AUTH_SERVICE_URL',
    'user': 'USER_SERVICE_URL',
    'outpass': 'OUTPASS_SERVICE_URL',
    'mail': 'MAIL_SERVICE_URL',
    'files': 'FILES_SERVICE_URL',
    'notification': 'NOTIFICATION_SERVICE_URL',
    'academics': 'ACADEMICS_SERVICE_URL',
    'cron': 'CRON_SERVICE_URL',
  };

  const envCmds = [];
  if (urls['gateway']) {
      envCmds.push(`echo "${urls['gateway']}/api/v1" | vercel env add GATEWAY_URL production --token $TOKEN --scope ${SCOPE}`);
  }
  
  for (const [svc, envVar] of Object.entries(envMap)) {
      if (urls[svc]) {
          envCmds.push(`echo "${urls[svc]}" | vercel env add ${envVar} production --token $TOKEN --scope ${SCOPE}`);
      }
  }
  
  fs.writeFileSync(ENV_SCRIPT, 
    `#!/bin/bash
export TOKEN=$(jq -r .token ~/Library/Application\\ Support/com.vercel.cli/auth.json)
# Using Scope: ${SCOPE}
` + envCmds.join('\n'));
  
  console.log(`\n📄 Generated ${ENV_SCRIPT}`);

  // Logs using URL
  console.log("\n====== LOGS: uniz-auth-service ======");
  if (urls['auth']) {
      try {
         const authPath = path.join(os.homedir(), 'Library/Application Support/com.vercel.cli/auth.json');
         const token = JSON.parse(fs.readFileSync(authPath, 'utf8')).token;
         // Note: vercel logs [url]
         const logCmd = `vercel logs ${urls['auth']} --limit 20 --token ${token} --scope ${SCOPE}`;
         const logs = execSync(logCmd, { encoding: 'utf-8' });
         console.log(logs);
      } catch (e) {
        console.log("Failed to fetch logs:", e.message);
      }
  } else {
      console.log("Skipping logs (Auth URL not found)");
  }
}

main();
