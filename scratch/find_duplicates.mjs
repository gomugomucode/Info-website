import fs from 'fs';
import path from 'path';

function getMdxFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getMdxFiles(filePath));
        } else if (file.endsWith('.mdx')) {
            results.push(filePath);
        }
    });
    return results;
}

function cleanText(text) {
    const content = text.replace(/^---.*?---/s, '');
    return content.split(/\n\n+/).map(b => b.trim()).filter(b => b.length > 40);
}

function main() {
    const rootDir = 'content';
    const files = getMdxFiles(rootDir);
    const blocksMap = new Map();

    files.forEach(file => {
        const text = fs.readFileSync(file, 'utf8');
        const blocks = cleanText(text);
        blocks.forEach(block => {
            if (!blocksMap.has(block)) {
                blocksMap.set(block, []);
            }
            blocksMap.get(block).push(file);
        });
    });

    let found = false;
    for (const [block, occurrences] of blocksMap.entries()) {
        if (occurrences.length > 1) {
            found = true;
            console.log('--- DUPLICATE BLOCK ---');
            console.log(block);
            console.log('\nFound in:');
            console.log(occurrences.join('\n'));
            console.log('\n');
        }
    }

    if (!found) {
        console.log('No duplicate blocks found.');
    }
}

main();
