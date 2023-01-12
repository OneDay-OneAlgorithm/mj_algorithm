// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
/* ex)
110 78 158
*/
const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

const arr = input.sort((a, b) => a - b);
const arithmetic = Math.round(arr.reduce((acc, cur) => acc + cur, 0) / n);
const median = arr[Math.floor(n / 2)];

const map = new Map();
let max = 1;
for (let number of arr) {
  if (map.has(number)) {
    max = Math.max(max, map.get(number) + 1);
    map.set(number, map.get(number) + 1);
  } else map.set(number, 1);
}

const maxArr = [];
for (const [key, value] of map) {
  if (value === max) maxArr.push(key);
}

const mode = maxArr.length === 1 ? maxArr[0] : maxArr[1];

const range = arr[n - 1] - arr[0];
console.log(arithmetic === -0 ? 0 : arithmetic);
console.log(median);
console.log(mode);
console.log(range);
