#!/bin/bash

echo "========================================="
echo "🚀 PORTFOLIO BLOG - PRODUCTION DEPLOYMENT"
echo "========================================="

# Kiểm tra và cài đặt dependencies nếu cần
echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build production
echo "🔨 Building production files..."
npm run build

# Kiểm tra build thành công
if [ ! -d "dist" ]; then
    echo "❌ Build failed! No dist directory found."
    exit 1
fi

# Tạo thư mục logs nếu chưa có
mkdir -p logs

# Stop và xóa process PM2 cũ nếu có
echo "🛑 Stopping old processes..."
pm2 stop portfolio-blog 2>/dev/null || true
pm2 delete portfolio-blog 2>/dev/null || true

# Start với PM2
echo "🔄 Starting production server with PM2..."
pm2 start ecosystem.config.js

# Save PM2 config
pm2 save
pm2 startup

# Show status
echo ""
echo "========================================="
echo "✅ DEPLOYMENT SUCCESSFUL!"
echo "========================================="
echo "📱 Access your portfolio at:"
echo "   http://YOUR_SERVER_IP:3000"
echo ""
echo "📊 Check status: pm2 status"
echo "📝 View logs: pm2 logs portfolio-blog"
echo "🔄 Restart: pm2 restart portfolio-blog"
echo "========================================="

pm2 status