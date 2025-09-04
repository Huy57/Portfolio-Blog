const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Gzip compression
app.use(compression());

// Serve static files từ thư mục dist
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React Router - trả về index.html cho mọi route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
  console.log(`📱 Access from network: http://YOUR_SERVER_IP:${PORT}`);
});