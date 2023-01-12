const fs = require('fs');
const input = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('')
  .map((v) => Number(v));

console.log(input.sort((a, b) => b - a).join(''));
