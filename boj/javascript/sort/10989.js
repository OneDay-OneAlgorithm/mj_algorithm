const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

const max = Math.max(...input);
const counting = Array(max + 1).fill(0);
input.forEach((v) => {
  counting[v]++;
});

console.log(counting.join('\n'));
