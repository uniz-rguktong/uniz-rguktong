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

echo "Processing root repo..."
cd /Users/sreecharandesu/Projects/uniz-rguktong
git add .
git commit -m "chore: update service submodules" || echo "No changes to commit in root"
git push || echo "Push failed in root"

echo "Done!"
