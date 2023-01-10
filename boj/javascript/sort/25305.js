// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
/* ex)
110 78 158
*/
const fs = require('fs');
const input = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, k] = input[0].split(' ').map((v) => Number(v));
const scores = input[1].split(' ').map((v) => Number(v));

scores.sort((a, b) => b - a);
console.log(scores[k - 1]);
