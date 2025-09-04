#!/bin/bash

echo "🚀 Starting deployment process..."

# Build production
echo "📦 Building production..."
npm run build

# Stop existing PM2 process if running
echo "🛑 Stopping existing PM2 process..."
pm2 stop portfolio-blog 2>/dev/null || true
pm2 delete portfolio-blog 2>/dev/null || true

# Start with PM2
echo "🔄 Starting with PM2..."
pm2 start ecosystem.config.js

# Save PM2 process list
pm2 save

# Show status
echo "✅ Deployment complete!"
pm2 status