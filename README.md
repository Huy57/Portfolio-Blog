# Portfolio Blog Website

Một trang web portfolio cá nhân hiện đại với tính năng quản lý nội dung qua trang Admin.

## 🌟 Tính năng

### Trang Portfolio
- **Hero Section**: Giới thiệu ấn tượng với hiệu ứng động
- **About**: Thông tin cá nhân chi tiết với tabs tương tác
- **Timeline**: Hiển thị quá trình học tập và làm việc
- **Projects**: Showcase dự án với filter và modal chi tiết
- **Skills**: Biểu đồ kỹ năng với animation
- **Gallery**: Album ảnh và tài liệu với lightbox
- **Contact**: Form liên hệ và social links

### Trang Admin (/admin)
- **Authentication**: Đăng nhập bảo mật
- **Dashboard**: Quản lý toàn bộ nội dung
- **Content Management**: Chỉnh sửa thông tin, dự án, hình ảnh
- **Real-time Updates**: Cập nhật nội dung trực tiếp

## 🚀 Cài đặt

```bash
# Clone repository
git clone [your-repo-url]

# Di chuyển vào thư mục
cd Portfolio-Blog

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

## 📁 Cấu trúc thư mục

``` 
Portfolio-Blog/
├── public/
│   └── assets/
│       ├── images/      # Hình ảnh portfolio
│       └── documents/    # Tài liệu CV, certificates
├── src/
│   ├── components/       # React components
│   ├── pages/           # Trang chính
│   ├── styles/          # CSS styles
│   ├── types/           # TypeScript types
│   ├── contexts/        # React contexts
│   └── data/            # Data files
```

## 🔐 Đăng nhập Admin

Truy cập `/admin` với thông tin:
- **Username**: admin
- **Password**: admin123

## 🎨 Tùy chỉnh

### Thay đổi thông tin cá nhân
1. Mở file `src/components/Hero.tsx`, `src/components/About.tsx`
2. Cập nhật thông tin cá nhân của bạn

### Thêm hình ảnh
1. Thêm hình ảnh vào `public/assets/images/`
2. Cập nhật đường dẫn trong components

### Thay đổi màu sắc
- Chỉnh sửa trong `tailwind.config.js`
- Hoặc trong `src/styles/index.css`

## 🛠️ Công nghệ sử dụng

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build Tool
- **React Router** - Routing

## 📝 Scripts

```bash
npm run dev      # Chạy development server
npm run build    # Build production
npm run preview  # Preview production build
```

## 🎯 Tính năng nổi bật

1. **Design độc đáo**: Glass morphism, gradient effects, neon glow
2. **Animations mượt mà**: Sử dụng Framer Motion
3. **Responsive**: Tối ưu cho mọi thiết bị
4. **Admin Dashboard**: Quản lý nội dung dễ dàng
5. **Performance**: Tối ưu với Vite và lazy loading

## 📱 Responsive Design

- Mobile First approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly interface

## 🔧 Cấu hình

### Vite Config
File: `vite.config.ts`
- Port mặc định: 3000

### TypeScript Config
File: `tsconfig.json`
- Strict mode enabled
- Module resolution: bundler

## 💡 Tips

1. **Thêm dự án mới**: Chỉnh sửa array `projects` trong `Projects.tsx`
2. **Cập nhật Timeline**: Thêm items vào `timelineData` trong `Timeline.tsx`
3. **Social Links**: Cập nhật trong `Contact.tsx`
4. **Skills**: Thêm/sửa trong `Skills.tsx`

## 🚦 Development

```bash
# Start development
npm run dev

# Truy cập
http://localhost:3000       # Portfolio
http://localhost:3000/admin # Admin Panel
```

## 📦 Production Build

```bash
# Build
npm run build

# Preview build
npm run preview
```

## 🤝 Support

Nếu cần hỗ trợ, vui lòng liên hệ qua các kênh social media trong trang Contact.

---

Made with ❤️ using React, TypeScript, and Tailwind CSS