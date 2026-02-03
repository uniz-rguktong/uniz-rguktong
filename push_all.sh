#!/bin/bash
set -e

echo "Processing uniz-mail-service..."
cd /Users/sreecharandesu/Projects/uniz-rguktong/uniz-mail-service
git add .
git commit -m "feat: enhance email templates and add pdf reporting" || echo "No changes to commit in mail service"
git push || echo "Push failed in mail service"

echo "Processing uniz-academics-service..."
cd /Users/sreecharandesu/Projects/uniz-rguktong/uniz-academics-service
git add .
git commit -m "feat: include student details in result publishing" || echo "No changes to commit in academics service"
git push || echo "Push failed in academics service"

echo "Processing uniz-outpass-service..."
cd /Users/sreecharandesu/Projects/uniz-rguktong/uniz-outpass-service
git add .
git commit -m "feat: include student details in result publishing" || echo "No changes to commit in outpass service"
git push || echo "Push failed in outpass service"

echo "Processing uniz-auth-service..."
cd /Users/sreecharandesu/Projects/uniz-rguktong/uniz-auth-service
git add .
git commit -m "feat: enhance auth security with rate limiting" || echo "No changes to commit in auth service"
git push || echo "Push failed in auth service"

echo "Processing uniz-user-service..."
cd /Users/sreecharandesu/Projects/uniz-rguktong/uniz-user-service
git add .
git commit -m "chore: update user service" || echo "No changes to commit in user service"
git push || echo "Push failed in user service"

echo "Processing uniz-files-service..."
cd /Users/sreecharandesu/Projects/uniz-rguktong/uniz-files-service
git add .
git commit -m "chore: update files service" || echo "No changes to commit in files service"
git push || echo "Push failed in files service"

echo "Processing uniz-notification-service..."
cd /Users/sreecharandesu/Projects/uniz-rguktong/uniz-notification-service
git add .
git commit -m "chore: update notification service" || echo "No changes to commit in notification service"
git push || echo "Push failed in notification service"

echo "Processing uniz-cron-service..."
cd /Users/sreecharandesu/Projects/uniz-rguktong/uniz-cron-service
git add .
git commit -m "chore: update cron service" || echo "No changes to commit in cron service"
git push || echo "Push failed in cron service"

echo "Processing uniz-production-gateway..."
cd /Users/sreecharandesu/Projects/uniz-rguktong/uniz-production-gateway
git add .
git commit -m "chore: update gateway configuration" || echo "No changes to commit in gateway"
git push || echo "Push failed in gateway"

echo "Processing uniz-infra..."
cd /Users/sreecharandesu/Projects/uniz-rguktong/uniz-infra
git add .
git commit -m "chore: update infra config" || echo "No changes to commit in infra"
git push || echo "Push failed in infra"

echo "Processing uniz-shared..."
cd /Users/sreecharandesu/Projects/uniz-rguktong/uniz-shared
git add .
git commit -m "chore: update shared modules" || echo "No changes to commit in shared"
git push || echo "Push failed in shared"

echo "Processing root repo..."
cd /Users/sreecharandesu/Projects/uniz-rguktong
git add .
git commit -m "chore: update service submodules" || echo "No changes to commit in root"
git push || echo "Push failed in root"

echo "Done!"
