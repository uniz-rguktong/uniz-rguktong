BASE_URL="postgresql://neondb_owner:npg_BP1it9EkDRGs@ep-red-queen-a12hqixj-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
REDIS_URL="rediss://default:AUjnAAIncDE0MTgwNzM4NjdjYzk0Nzg3YTg2NzIyN2VkMGI1YjRkYnAxMTg2NjM@cheerful-collie-18663.upstash.io:6379"

services="uniz-auth-service:auth uniz-user-service:users uniz-outpass-service:outpass uniz-academics-service:academics"

for s in $services; do
  service=$(echo $s | cut -d':' -f1)
  schema=$(echo $s | cut -d':' -f2)
  FULL_URL="${BASE_URL}&schema=${schema}"
  
  echo "--- Processing $service (Schema: $schema) ---"
  
  cd $service
  
  # Update Env Vars
  echo "Setting DATABASE_URL..."
  npx vercel env rm DATABASE_URL production --yes || true
  echo "$FULL_URL" | npx vercel env add DATABASE_URL production
  
  echo "Setting REDIS_URL..."
  npx vercel env rm REDIS_URL production --yes || true
  echo "$REDIS_URL" | npx vercel env add REDIS_URL production
  
  echo "Deploying to Production..."
  npx vercel deploy --prod --yes
  
  cd ..
done
