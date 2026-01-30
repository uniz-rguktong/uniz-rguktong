#!/bin/bash

# Kill existing services if any
lsof -ti :3001-3004 | xargs kill -9 2>/dev/null

echo "Starting services..."

cd uniz-auth-service
PORT=3001 npm run dev > ../auth.log 2>&1 &
echo "Auth Service started on 3001"
cd ..

cd uniz-user-service
PORT=3002 npm run dev > ../user.log 2>&1 &
echo "User Service started on 3002"
cd ..

cd uniz-outpass-service
PORT=3003 npm run dev > ../outpass.log 2>&1 &
echo "Outpass Service started on 3003"
cd ..

cd uniz-academics-service
PORT=3004 npm run dev > ../academics.log 2>&1 &
echo "Academics Service started on 3004"
cd ..

echo "Waiting for services to be ready..."
sleep 10

# Check health
curl -s http://localhost:3001/health
curl -s http://localhost:3002/health
curl -s http://localhost:3003/health
curl -s http://localhost:3004/health
