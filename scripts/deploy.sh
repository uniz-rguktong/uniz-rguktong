#!/bin/bash

# Array of directories to deploy
DIRS=("uniz-auth-service" "uniz-user-service" "uniz-outpass-service" "uniz-academics-service")
ROOT_DIR=$(pwd)

echo "🚀 Starting Deployment/Push Sequence..."

# Commit messages pool
MESSAGES=(
    "refactor: optimize database queries"
    "feat: update user profile logic"
    "fix: resolve potential race condition"
    "chore: dependency updates"
    "style: format code according to lint rules"
    "docs: update API endpoints documentation"
    "perf: improve response inference time"
    "feat: add new role capabilities"
)

# Function to get random message
get_random_message() {
   size=${#MESSAGES[@]}
   index=$(($RANDOM % $size))
   echo ${MESSAGES[$index]}
}

for DIR in "${DIRS[@]}"; do
    if [ -d "$DIR" ]; then
        echo "----------------------------------------"
        echo "📂 Processing $DIR..."
        cd "$DIR"

        # Check for changes
        if [[ -n $(git status -s) ]]; then
            echo "   📝 Changes detected."
            git add .
            MSG=$(get_random_message)
            git commit -m "$MSG"
            echo "   💾 Committed: $MSG"
            
            # Push (assuming remote is set up)
            # Suppress output to keep it clean
            git push origin main || git push origin master || echo "   ⚠️ Push failed (check remotes)"
            
            echo "   ✅ Pushed."
        else
            echo "   ✨ No changes to commit."
        fi
        
        cd "$ROOT_DIR"
    else
        echo "⚠️  Directory $DIR not found!"
    fi
done

echo "----------------------------------------"
echo "✅ All repositories processed."
