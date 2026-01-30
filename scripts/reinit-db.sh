#!/bin/bash

# Define the base Database URL (Neon DB)
# Note: In a production or shared environment, this should be in .env. 
# We include it here for compatibility with existing scripts.
DB_BASE="postgresql://neondb_owner:npg_5ulZqX3YDptG@ep-frosty-mud-ahwpoi10-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require"

# Function to reset and push schema for a service
reset_service_db() {
    SERVICE_DIR=$1
    SCHEMA_NAME=$2
    
    echo "----------------------------------------------------------------"
    echo "🧨 Resetting DB for $SERVICE_DIR (Schema: $SCHEMA_NAME) ..."
    echo "----------------------------------------------------------------"
    
    if [ ! -d "$SERVICE_DIR" ]; then
        echo "❌ Directory $SERVICE_DIR not found. Skipping."
        return
    fi
    
    pushd "$SERVICE_DIR" > /dev/null
    
    # Construct connection string with specific schema
    export DATABASE_URL="$DB_BASE&schema=$SCHEMA_NAME"
    
    # Run Prisma DB Push with Force Reset
    # This drops all data and tables in the schema and re-creates them
    if [ -f "./node_modules/.bin/prisma" ]; then
        ./node_modules/.bin/prisma db push --force-reset --accept-data-loss
    else
        npx prisma db push --force-reset --accept-data-loss
    fi
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully reset and pushed schema for $SERVICE_DIR"
    else
        echo "❌ Failed to reset $SERVICE_DIR"
        exit 1
    fi
    
    popd > /dev/null
}

# 1. Reset Databases for all Services
echo "🚀 Starting Full Database Reset..."

reset_service_db "uniz-auth-service" "auth"
reset_service_db "uniz-user-service" "users"
reset_service_db "uniz-academics-service" "academics"
reset_service_db "uniz-outpass-service" "outpass"

echo "----------------------------------------------------------------"
echo "✅ All Databases Reset & Schemas Applied."
echo "----------------------------------------------------------------"

# 2. Run Seeding Script
echo "🌱 Starting Data Seeding..."
node scripts/seed.js

echo "----------------------------------------------------------------"
echo "🎉 Full Reset & Seed Complete!"
echo "----------------------------------------------------------------"
