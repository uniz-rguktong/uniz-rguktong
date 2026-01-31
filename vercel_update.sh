BASE_URL="postgresql://neondb_owner:npg_BP1it9EkDRGs@ep-red-queen-a12hqixj-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

services="uniz-auth-service:auth uniz-user-service:users uniz-outpass-service:outpass uniz-academics-service:academics"

for s in $services; do
  service=$(echo $s | cut -d':' -f1)
  schema=$(echo $s | cut -d':' -f2)
  FULL_URL="${BASE_URL}&schema=${schema}"
  
  echo "--- Processing $service (Schema: $schema) ---"
  
  cd $service
  
  # Set the environment variable
  # Note: vercel env add is interactive unless piped or using flags
  # We use --force if available or just pipe
  echo "Removing old DATABASE_URL..."
  npx vercel env rm DATABASE_URL production --yes || true
  
  echo "Adding new DATABASE_URL..."
  echo "$FULL_URL" | npx vercel env add DATABASE_URL production
  
  echo "Deploying to Production..."
  npx vercel deploy --prod --yes
  
  cd ..
done
