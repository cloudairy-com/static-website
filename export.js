const fs = require('fs');
const path = require('path');

const renderStaticPages = () => {
  const pagesDir = path.join(__dirname, 'pages');
  const distDir = path.join(__dirname, 'dist');

  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  // Copy HTML files
  const pages = fs.readdirSync(pagesDir)
    .filter(file => file.endsWith('.html'));

  pages.forEach(page => {
    const sourcePath = path.join(pagesDir, page);
    const destPath = path.join(distDir, page);

    // Special handling for home page
    if (page === 'home.html') {
      const indexPath = path.join(distDir, 'index.html');
      fs.copyFileSync(sourcePath, indexPath);
    }

    fs.copyFileSync(sourcePath, destPath);
  });

  // Copy static assets
  const assetsDir = path.join(__dirname, 'assets');
  const distAssetsDir = path.join(distDir, 'assets');
  
  if (!fs.existsSync(distAssetsDir)) {
    fs.mkdirSync(distAssetsDir, { recursive: true });
  }

  fs.cpSync(assetsDir, distAssetsDir, { recursive: true });

  console.log('Static site generated successfully in dist directory');
};

renderStaticPages();
