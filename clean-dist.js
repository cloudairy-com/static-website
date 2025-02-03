const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');

// Remove dist directory if it exists
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true });
}

// Create dist directory
fs.mkdirSync(distPath);

console.log('Dist directory cleaned and recreated.');
