const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const SCOPE = 'sreecharans-projects-be53fce6';
const services = ['auth', 'user', 'outpass', 'academics', 'files', 'mail', 'notification', 'cron', 'web', 'gateway'];

function getLatestDeployment(project) {
  try {
    const authPath = path.join(os.homedir(), 'Library/Application Support/com.vercel.cli/auth.json');
    const token = JSON.parse(fs.readFileSync(authPath, 'utf8')).token;
    const cmd = `vercel list ${project} --prod --token ${token} --scope ${SCOPE}`;
    const output = execSync(cmd, { encoding: 'utf-8' });
    const match = output.match(/(https:\/\/[^\s]+\.vercel\.app)/);
    return match ? match[1] : null;
  } catch (e) {
    return null;
  }
}

async function main() {
  const authPath = path.join(os.homedir(), 'Library/Application Support/com.vercel.cli/auth.json');
  const token = JSON.parse(fs.readFileSync(authPath, 'utf8')).token;

  console.log("# VERCEL RUNTIME LOGS SUMMARY\n");

  for (const svc of services) {
    const project = svc === 'gateway' ? 'uniz-production-gateway' : `uniz-${svc}-service`;
    const url = getLatestDeployment(project);
    
    console.log(`## Service: ${svc} (${project})`);
    if (url) {
      console.log(`URL: ${url}`);
      try {
        const logCmd = `vercel logs ${url} --limit 10 --token ${token} --scope ${SCOPE}`;
        const logs = execSync(logCmd, { encoding: 'utf-8' });
        console.log("### Logs:");
        console.log(logs || "(No recent logs found)");
      } catch (e) {
        console.log(`Error fetching logs: ${e.message}`);
      }
    } else {
      console.log("URL: Not found (likely build failed or project name is different)");
    }
    console.log("\n---\n");
  }
}

main();
