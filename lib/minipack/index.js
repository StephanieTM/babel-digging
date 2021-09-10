const fs = require('fs');
const path = require('path');
const program = require('commander');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

function createAsset(filePath) {
  const code = fs.readFileSync(filePath, 'utf-8');
  const ast = parser.parse(code, {
    sourceType: 'module',
  });
  fs.mkdirSync(path.dirname('./lib/output/ast.json'), { recursive: true });
  fs.writeFileSync('./lib/output/ast.json', JSON.stringify(ast, null, '\t'), { encoding: 'utf-8' });
  console.log('[INFO] ast saved at ./lib/output/ast.json');

  // const deps = [];
  // traverse(ast, {

  // })
}


function main() {
  const [filePath = './lib/example/index.js'] = program.parse().args;
  if (filePath) {
    createAsset(filePath);
  }
}

main();
