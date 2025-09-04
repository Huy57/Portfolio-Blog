# 🚀 Hướng Dẫn Deploy Production Server

## 📋 Yêu cầu hệ thống
- Node.js >= 16
- PM2 (`npm install -g pm2`)
- Git

## 🛠️ Các bước deploy trên server (103.176.20.84)

### 1. Clone repository
```bash
git clone [your-repo-url]
cd Portfolio-Blog
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Build production
```bash
npm run build
```
Lệnh này sẽ tạo thư mục `dist/` chứa các file static đã được optimize.

### 4. Chạy server production với PM2

#### Cách 1: Sử dụng script tự động
```bash
chmod +x deploy-production.sh
./deploy-production.sh
```

#### Cách 2: Chạy thủ công
```bash
# Build
npm run build

# Start với PM2
pm2 start ecosystem.config.js

# Hoặc
pm2 start server.js --name portfolio-blog
```

### 5. Kiểm tra firewall
```bash
# Ubuntu/Debian
sudo ufw allow 3000

# CentOS/RHEL  
sudo firewall-cmd --add-port=3000/tcp --permanent
sudo firewall-cmd --reload
```

## 📱 Truy cập
- Website: `http://103.176.20.84:3000`
- Admin Panel: `http://103.176.20.84:3000/admin`
  - Username: `admin`
  - Password: `admin123`

## 🔧 Quản lý với PM2

### Các lệnh thường dùng
```bash
# Xem status
pm2 status

# Xem logs
pm2 logs portfolio-blog

# Restart
pm2 restart portfolio-blog

# Stop
pm2 stop portfolio-blog

# Xem chi tiết
pm2 show portfolio-blog

# Monitor real-time
pm2 monit
```

### Auto start khi reboot server
```bash
pm2 startup
pm2 save
```

## 📁 Cấu trúc production

```
Portfolio-Blog/
├── dist/            # Production build files
├── server.js        # Express server để serve static files
├── ecosystem.config.js  # PM2 config
├── logs/           # PM2 logs
│   ├── err.log
│   ├── out.log
│   └── combined.log
└── ...
```

## 🔄 Update code mới

```bash
# Pull code mới
git pull

# Rebuild
npm run build

# Restart PM2
pm2 restart portfolio-blog
```

## ⚠️ Lưu ý quan trọng

1. **Không cần môi trường dev** - Server chỉ chạy production build
2. **Static files** - Tất cả được build thành static files trong `/dist`
3. **Express server** - `server.js` serve static files và handle routing
4. **Port 3000** - Đảm bảo port 3000 được mở trong firewall
5. **Logs** - Kiểm tra logs trong thư mục `/logs` nếu có lỗi

## 🐛 Troubleshooting

### Port đã được sử dụng
```bash
# Kiểm tra port
netstat -tulpn | grep 3000

# Kill process đang dùng port
kill -9 [PID]
```

### Không truy cập được từ bên ngoài
1. Kiểm tra firewall
2. Kiểm tra server.js đang listen trên `0.0.0.0` không phải `localhost`
3. Kiểm tra PM2 đang chạy: `pm2 status`

### Build lỗi
```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📞 Support
Nếu gặp vấn đề, kiểm tra:
- PM2 logs: `pm2 logs portfolio-blog`
- Build output: Kiểm tra thư mục `/dist` đã được tạo chưa
- Network: Đảm bảo port 3000 được mở