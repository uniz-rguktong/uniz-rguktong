#!/bin/bash
export TOKEN=$(jq -r .token ~/Library/Application\ Support/com.vercel.cli/auth.json)
# Using Scope: sreecharans-projects-be53fce6
echo "https://uniz-production-gateway-eg289ixen-sreecharans-projects-be53fce6.vercel.app/api/v1" | vercel env add GATEWAY_URL production --token $TOKEN --scope sreecharans-projects-be53fce6
echo "https://uniz-auth-service-6k7dzz1hf-sreecharans-projects-be53fce6.vercel.app" | vercel env add AUTH_SERVICE_URL production --token $TOKEN --scope sreecharans-projects-be53fce6
echo "https://uniz-user-service-k8at4ure8-sreecharans-projects-be53fce6.vercel.app" | vercel env add USER_SERVICE_URL production --token $TOKEN --scope sreecharans-projects-be53fce6
echo "https://uniz-outpass-service-33wgelbfu-sreecharans-projects-be53fce6.vercel.app" | vercel env add OUTPASS_SERVICE_URL production --token $TOKEN --scope sreecharans-projects-be53fce6
echo "https://uniz-mail-service-hl8rbpbpa-sreecharans-projects-be53fce6.vercel.app" | vercel env add MAIL_SERVICE_URL production --token $TOKEN --scope sreecharans-projects-be53fce6
echo "https://uniz-files-service-inl4xlxsu-sreecharans-projects-be53fce6.vercel.app" | vercel env add FILES_SERVICE_URL production --token $TOKEN --scope sreecharans-projects-be53fce6
echo "https://uniz-notification-service-ki3klmlg8.vercel.app" | vercel env add NOTIFICATION_SERVICE_URL production --token $TOKEN --scope sreecharans-projects-be53fce6
echo "https://uniz-academics-service-32gly2yrc-sreecharans-projects-be53fce6.vercel.app" | vercel env add ACADEMICS_SERVICE_URL production --token $TOKEN --scope sreecharans-projects-be53fce6
echo "https://uniz-cron-service-knjlecz4e-sreecharans-projects-be53fce6.vercel.app" | vercel env add CRON_SERVICE_URL production --token $TOKEN --scope sreecharans-projects-be53fce6