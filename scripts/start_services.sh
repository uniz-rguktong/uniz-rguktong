#!/bin/bash

# Get the root directory (one level up from this script)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="$( cd "$SCRIPT_DIR/.." && pwd )"

# Kill existing services if any (be more aggressive)
echo "Cleaning up ports 3000-3008..."
lsof -ti :3000-3008 | xargs kill -9 2>/dev/null || true

mkdir -p "$ROOT_DIR/logs"
echo "Starting microservices..."

cd "$ROOT_DIR/uniz-auth-service"
PORT=3001 npm run dev > "$ROOT_DIR/logs/auth.log" 2>&1 &
echo "Auth Service started on 3001"

cd "$ROOT_DIR/uniz-user-service"
PORT=3002 npm run dev > "$ROOT_DIR/logs/user.log" 2>&1 &
echo "User Service started on 3002"

cd "$ROOT_DIR/uniz-outpass-service"
PORT=3003 npm run dev > "$ROOT_DIR/logs/outpass.log" 2>&1 &
echo "Outpass Service started on 3003"

cd "$ROOT_DIR/uniz-academics-service"
PORT=3004 npm run dev > "$ROOT_DIR/logs/academics.log" 2>&1 &
echo "Academics Service started on 3004"

cd "$ROOT_DIR/uniz-files-service"
PORT=3005 npm run dev > "$ROOT_DIR/logs/files.log" 2>&1 &
echo "Files Service started on 3005"

cd "$ROOT_DIR/uniz-mail-service"
PORT=3006 npm run dev > "$ROOT_DIR/logs/mail.log" 2>&1 &
echo "Mail Service started on 3006"

cd "$ROOT_DIR/uniz-notification-service"
PORT=3007 npm run dev > "$ROOT_DIR/logs/notification.log" 2>&1 &
echo "Notification Service started on 3007"

cd "$ROOT_DIR/uniz-cron-service"
PORT=3008 npm run dev > "$ROOT_DIR/logs/cron.log" 2>&1 &
echo "Cron Service started on 3008"

echo "Starting API Gateway locally..."
cd "$ROOT_DIR/uniz-production-gateway"
npx vercel dev --listen 3000 --yes > "$ROOT_DIR/logs/gateway.log" 2>&1 &
echo "Gateway started on 3000"

echo "Waiting for all services to be ready (15s)..."
sleep 15

# Check health
echo "--- Health Checks ---"
curl -s http://localhost:3001/health | grep status || echo "Auth: FAIL"
curl -s http://localhost:3002/health | grep status || echo "User: FAIL"
curl -s http://localhost:3003/health | grep status || echo "Outpass: FAIL"
curl -s http://localhost:3004/health | grep status || echo "Academics: FAIL"
curl -s http://localhost:3005/health | grep status || echo "Files: FAIL"
curl -s http://localhost:3006/health | grep status || echo "Mail: FAIL"
curl -s http://localhost:3007/health | grep status || echo "Notification: FAIL"
curl -s http://localhost:3008/health | grep status || echo "Cron: FAIL"
curl -s http://localhost:3000/api/v1/system/health | grep success || echo "Gateway: FAIL"
echo "--------------------"
echo "Logs are available in the /logs directory."
