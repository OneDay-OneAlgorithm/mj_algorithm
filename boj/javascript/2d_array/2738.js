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
  .split('\n');
const newArr = input.map((v) => v.split(' ').map((v) => parseInt(v)));

const N = newArr[0][0];
const M = newArr[0][1];
const firstMatrix = [];
for (let i = 1; i < N + 1; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(newArr[i][j]);
  }
  firstMatrix.push(row);
}

const secondMatrix = [];
for (let i = N + 1; i < N * 2 + 1; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(newArr[i][j]);
  }
  secondMatrix.push(row);
}

const resultMatrix = [];
for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(firstMatrix[i][j] + secondMatrix[i][j]);
  }
  resultMatrix.push(row);
}

for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(resultMatrix[i][j]);
  }
  console.log(...row);
}
