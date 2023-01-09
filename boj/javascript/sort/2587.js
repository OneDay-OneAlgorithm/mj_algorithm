// 3. 입력값이 여러 줄일 때
/* ex)
110
78
158
*/
const fs = require('fs');
const input = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

for (let i = 1; i < input.length; i++) {
  const key = input[i];
  let j = i - 1;
  while (j >= 0 && input[j] > key) {
    input[j + 1] = input[j];
    j--;
  }
  input[j + 1] = key;
}

const avg = input.reduce((acc, cur) => acc + cur, 0) / input.length;
console.log(avg);
const mid = input[parseInt(input.length / 2)];
console.log(mid);
