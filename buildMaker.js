const fs = require('fs');
const path = require('path');

const renderStaticPages = () => {
  const pagesDir = path.join(__dirname, 'pages');
  const distDir = path.join(__dirname, 'dist');

  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  // Copy HTML files, excluding blog and blog-detail
  const pages = fs.readdirSync(pagesDir)
    .filter(file => 
      file.endsWith('.html') && 
      !file.includes('blog-') && 
      file !== 'blog.html'
    );

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

  // Ensure 404 page exists
  const notFoundPage = path.join(pagesDir, '404.html');
  if (!fs.existsSync(notFoundPage)) {
    console.error('Warning: 404.html not found in pages directory');
  } else {
    const notFoundDestPath = path.join(distDir, '404.html');
    fs.copyFileSync(notFoundPage, notFoundDestPath);
  }

  // Create .htaccess file for routing
  const htaccessContent = `# Custom 404 error document
ErrorDocument 404 /404.html

# Redirect all non-existent pages to 404
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /404.html [L,R=404]

# Optional: Remove .html extension
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}\.html -f
RewriteRule ^(.*)$ $1.html [L]`;

  // Write .htaccess file
  fs.writeFileSync(path.join(distDir, '.htaccess'), htaccessContent);

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
