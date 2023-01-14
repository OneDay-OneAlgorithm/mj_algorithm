// 3. 입력값이 여러 줄일 때
/* ex)
110
78
158
*/
const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n');

input.sort((a, b) => Number(a.split(' ')[0]) - Number(b.split(' ')[0]));

console.log(input.join('\n'));
