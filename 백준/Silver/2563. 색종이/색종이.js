// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
/* ex)
3
110
78
158
*/
const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const N = input[0];
input.shift();
let copy = input.map((v) => v.split(' ').map((e) => Number(e)));
const matrix = new Array(100).fill().map((el) => new Array(100).fill(false));

for (let i = 0; i < N; i++) {
  const x = copy[i][0];
  const y = copy[i][1];
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      matrix[x + j][y + k] = true;
    }
  }
}

console.log(matrix.flat().filter((v) => v).length);
