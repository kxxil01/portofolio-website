const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateFavicon() {
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  const icoPath = path.join(__dirname, '../public/favicon.ico');
  
  // Create favicon.ico (32x32)
  await sharp(svgPath)
    .resize(32, 32)
    .toFile(icoPath);
    
  console.log('✅ Generated favicon.ico');
  
  // Copy to src/app/favicon.ico
  fs.copyFileSync(icoPath, path.join(__dirname, '../src/app/favicon.ico'));
  console.log('✅ Copied favicon.ico to src/app/favicon.ico');
  
  // Create app icon (192x192 for PWA)
  await sharp(svgPath)
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, '../public/icon-192.png'));
  console.log('✅ Generated icon-192.png');
  
  // Create app icon (512x512 for PWA)
  await sharp(svgPath)
    .resize(512, 512)
    .png()
    .toFile(path.join(__dirname, '../public/icon-512.png'));
  console.log('✅ Generated icon-512.png');
}

generateFavicon().catch(console.error);
