// Test server to check if the entry file exists and works
import fs from 'fs';
import path from 'path';

const entryPath = './.vercel/output/functions/_render.func/dist/server/entry.mjs';

console.log('Checking if entry file exists...');
console.log('Current directory:', process.cwd());
console.log('Entry file path:', entryPath);
console.log('Absolute path:', path.resolve(entryPath));

if (fs.existsSync(entryPath)) {
  console.log('Entry file exists!');
  console.log('File stats:', fs.statSync(entryPath));
} else {
  console.log('Entry file does not exist!');
  
  // List directories to see what's actually there
  try {
    console.log('.vercel directory exists:', fs.existsSync('./.vercel'));
    if (fs.existsSync('./.vercel')) {
      console.log('.vercel contents:', fs.readdirSync('./.vercel'));
    }
    
    if (fs.existsSync('./.vercel/output')) {
      console.log('.vercel/output contents:', fs.readdirSync('./.vercel/output'));
    }
    
    if (fs.existsSync('./.vercel/output/functions')) {
      console.log('.vercel/output/functions contents:', fs.readdirSync('./.vercel/output/functions'));
    }
  } catch (err) {
    console.error('Error reading directories:', err);
  }
}