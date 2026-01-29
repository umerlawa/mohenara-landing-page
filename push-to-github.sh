#!/bin/bash
# Push Mohenara Landing Page to GitHub
# Run this script from Terminal: ./push-to-github.sh

cd "$(dirname "$0")"

# Clean up any previous git state
rm -rf .git

# Initialize fresh git repo
git init
git branch -m main

# Add all files
git add .

# Commit
git commit -m "Initial commit: Mohenara landing page"

# Add remote and push
git remote add origin https://github.com/umerlawa/mohenara-landing-page.git
git push -u origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo "📎 Repository: https://github.com/umerlawa/mohenara-landing-page"
