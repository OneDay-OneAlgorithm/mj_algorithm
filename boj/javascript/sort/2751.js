const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

console.log(input.sort((a, b) => a - b).join('\n'));
