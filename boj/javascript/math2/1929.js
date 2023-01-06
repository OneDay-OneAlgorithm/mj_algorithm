// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
/* ex)
110 78 158
*/
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = [3, 16];
const start = Number(input[0]);
const end = Number(input[1]);

function eratos() {
  const arr = Array(end + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= Math.sqrt(end); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= end; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}

const eratosArr = eratos();
console.log(eratosArr);

for (let i = start; i <= end; i++) {
  if (eratosArr[i]) console.log(i);
}
