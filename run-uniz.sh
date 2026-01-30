#!/bin/bash
# UniZ Master Start Script

# Colors for better output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting UniZ Microservices Stack...${NC}"

# 1. Spin up Infrastructure
cd uniz-infra/docker
docker-compose up -d

echo -e "Waiting for Database connectivity..."
sleep 10

# 2. Database Sync per service
echo -e "${BLUE}Synchronizing Microservice Schemas (Prisma)...${NC}"
cd ../..

echo " - Auth Service..."
export DATABASE_URL="postgresql://user:password@localhost:5432/uniz_db?schema=auth"
(cd uniz-auth-service && npx prisma db push --accept-data-loss --skip-generate > /dev/null)

echo " - User Service..."
export DATABASE_URL="postgresql://user:password@localhost:5432/uniz_db?schema=users"
(cd uniz-user-service && npx prisma db push --accept-data-loss --skip-generate > /dev/null)

echo " - Outpass Service..."
export DATABASE_URL="postgresql://user:password@localhost:5432/uniz_db?schema=outpass"
(cd uniz-outpass-service && npx prisma db push --accept-data-loss --skip-generate > /dev/null)

echo " - Cron Service..."
export DATABASE_URL="postgresql://user:password@localhost:5432/uniz_db?schema=public"
(cd uniz-cron-service && npx prisma db push --accept-data-loss --skip-generate > /dev/null)

# 3. Frontend Start
echo -e "${BLUE}Launching Frontend Dashboard...${NC}"
cd uniz-client
# Ensure dependencies and run in background, binding to 0.0.0.0
# We use nohup to ensure it doesn't die when the script finishes
nohup npm run dev -- --port 5173 --host 0.0.0.0 > ../vite.log 2>&1 &

echo -e "\n${GREEN}UniZ System is Online!${NC}"
echo -e "------------------------------------------------"
echo -e "Frontend URL: http://localhost:5173"
echo -e "API Gateway:  http://localhost:3000/api/v1"
echo -e "Health Check: http://localhost:3000/health"
echo -e "------------------------------------------------"
echo -e "TIP: View live logs with: ${BLUE}docker-compose -f uniz-infra/docker/docker-compose.yml logs -f${NC}\n"

# Leave script running to keep tunnel/process info? No, user wants clean.
# I will tail the logs of the gateway for a few seconds to show "Neat logs" then stop.
echo -e "${BLUE}Tail of Gateway Logs:${NC}"
docker-compose -f uniz-infra/docker/docker-compose.yml logs --tail=10 uniz-gateway
