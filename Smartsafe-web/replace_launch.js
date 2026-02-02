const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

function replaceInValue(value) {
    if (typeof value === 'string') {
        // Skip URLs
        if (value.startsWith('http://') || value.startsWith('https://')) {
            return value;
        }
        // Replace "launch" (case-insensitive) with "Smartsafe" globally
        return value.replace(/launch/gi, 'Smartsafe');
    } else if (Array.isArray(value)) {
        return value.map(item => replaceInValue(item));
    } else if (typeof value === 'object' && value !== null) {
        const newObj = {};
        for (const key in value) {
            newObj[key] = replaceInValue(value[key]);
        }
        return newObj;
    }
    return value;
}

let modifiedCount = 0;

walkDir(contentDir, (filePath) => {
  if (filePath.endsWith('.json')) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const json = JSON.parse(fileContent);
        
        const originalString = JSON.stringify(json);
        const modifiedJson = replaceInValue(json);
        const modifiedString = JSON.stringify(modifiedJson);

        if (originalString !== modifiedString) {
            fs.writeFileSync(filePath, JSON.stringify(modifiedJson, null, 2), 'utf8');
            console.log(`Modified: ${filePath}`);
            modifiedCount++;
        }
    } catch (err) {
        console.error(`Error processing ${filePath}:`, err);
    }
  }
});

console.log(`Finished processing. Modified ${modifiedCount} files.`);
