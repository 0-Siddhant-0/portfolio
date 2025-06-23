// scripts/updateFontSizes.js
const fs = require('fs');
const path = require('path');

const fontSizeMap = {
  // Headers
  'text-6xl': 'text-[48px]',
  'text-5xl': 'text-[40px]',
  'text-4xl': 'text-[36px]',
  'text-3xl': 'text-[32px]',
  'text-2xl': 'text-[28px]',
  
  // Body text
  'text-xl': 'text-[22px]',
  'text-lg': 'text-[20px]',
  'text-base': 'text-[18px]',
  
  // Small text
  'text-sm': 'text-[16px]',
  'text-xs': 'text-[14px]',
};

function updateFontSizesInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all font size classes with their new values
  Object.entries(fontSizeMap).forEach(([oldClass, newClass]) => {
    const regex = new RegExp(`\\b${oldClass}\\b`, 'g');
    content = content.replace(regex, newClass);
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated font sizes in: ${filePath}`);
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      // Skip node_modules and build directories
      if (file !== 'node_modules' && file !== 'build') {
        processDirectory(filePath);
      }
    } else if (file.match(/\.(jsx?|tsx?)$/)) {
      updateFontSizesInFile(filePath);
    }
  });
}

// Start processing from the src directory
const srcPath = path.join(process.cwd(), 'src');
processDirectory(srcPath);
console.log('Font size update complete!');