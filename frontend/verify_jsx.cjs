const parser = require('@babel/parser');
const fs = require('fs');
const files = ['src/pages/Unit5Lesson1.jsx', 'src/pages/Unit5Lesson2.jsx'];

for (const file of files) {
    try {
        const code = fs.readFileSync(file, 'utf8');
        parser.parse(code, {
            sourceType: 'module',
            plugins: ['jsx']
        });
        console.log(file + ' is OK');
    } catch (e) {
        console.error('Error in ' + file + ':');
        console.error(e.message);
        const codeLines = fs.readFileSync(file, 'utf8').split('\n');
        if (e.loc) {
            console.error(codeLines[e.loc.line - 1]);
            console.error(' '.repeat(e.loc.column) + '^');
        }
    }
}
