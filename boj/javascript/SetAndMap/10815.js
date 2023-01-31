// 3. 입력값이 여러 줄일 때
/* ex)
110
78
158
*/
const fs = require('fs');
const input = fs
  .readFileSync('boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = [Number(input[0]), Number(input[2])];

const MainCardSet = new Set(input[1].split(' '));

let result = '';
for (const card of input[3].split(' ')) {
  if (MainCardSet.has(card)) {
    result += '1';
  } else {
    result += '0';
  }
}

console.log(result.split('').join(' '));
