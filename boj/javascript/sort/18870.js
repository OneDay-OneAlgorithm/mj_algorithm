// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
/* ex)
3
110 78 158
*/
const fs = require('fs');
const [n, input] = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n');
const inputArr = input
  .trim()
  .split(' ')
  .map((v) => Number(v));

const set = new Set(inputArr);
const setArr = Array.from(set).sort((a, b) => a - b);

const map = new Map();
for (let i = 0; i < setArr.length; i++) {
  map.set(setArr[i], i);
}

for (let i = 0; i < inputArr.length; i++) {
  if (map.has(inputArr[i])) {
    inputArr[i] = map.get(inputArr[i]);
  }
}

console.log(inputArr.join(' '));
