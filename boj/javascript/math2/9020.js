// 3. 입력값이 여러 줄일 때
/* ex)
110
78
158
*/
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [3, 8, 10, 16];

const N = input[0];
input.shift();
const cases = [...input];

function eratos() {
  const max = Math.max(...cases);
  const arr = Array(max + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= Math.sqrt(max); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= max; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}

const eratosArr = eratos()
  .map((v, i) => (v ? i : 0))
  .filter((e) => e);

for (let testCase of cases) {
  let count = 0;
  const goldBach = [];
  for (let n of eratosArr) {
    if (count > parseInt(testCase / 2, 10)) break;
    if (eratosArr.includes(testCase - n)) goldBach.push([n, testCase - n]);
    count++;
  }
  let difference = goldBach.map((v) => Math.abs(v[1] - v[0]));
  const index = difference.indexOf(Math.min.apply(null, difference));
  console.log(goldBach[index][0], goldBach[index][1]);
}
