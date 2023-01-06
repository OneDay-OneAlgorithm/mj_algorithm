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

const max = Math.max(...input);

function eratos() {
  const newMax = max * 2;
  const arr = Array(newMax + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= Math.sqrt(newMax); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= newMax; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}

const eratosArr = eratos();
for (let i = 0; i < input.length - 1; i++) {
  let count = 0;
  for (let j = input[i] + 1; j <= 2 * input[i]; j++) {
    if (eratosArr[j]) {
      count++;
    }
  }
  console.log(count);
}
