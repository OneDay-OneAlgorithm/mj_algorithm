// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
/* ex)
3
110
78
158
*/
const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = n.split(' ');
const set = new Set(input.slice(0, Number(N)));
const arr = input.slice(Number(N));

let count = 0;
for (const data of arr) {
  if (set.has(data)) count++;
}

console.log(count);
