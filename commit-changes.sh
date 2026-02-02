#!/bin/bash
cd "$(dirname "$0")"

# Remove any stale lock files
rm -f .git/index.lock

# Add the modified files
git add app/layout.tsx components/header.tsx

# Commit
git commit -m "Update header logo and favicon configuration

- Replace text logo with full SVG logo image in header
- Update favicon configuration for new icon files

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

# Push to GitHub
git push origin main

echo "Done! Changes pushed to GitHub."
