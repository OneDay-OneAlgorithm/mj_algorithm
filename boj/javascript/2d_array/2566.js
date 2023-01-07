// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
/* ex)
110 78 158
*/
const fs = require('fs');
const input = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((e) => Number(e)));

let max = 0;
let row = 0;
let col = 0;
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] > max) {
      max = input[i][j];
      row = i;
      col = j;
    }
  }
}

console.log(max);
console.log(row + 1, col + 1);
