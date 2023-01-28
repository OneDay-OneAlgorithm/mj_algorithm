// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const input = fs.readFileSync('boj/javascript/input.txt').toString().trim();
const N = Number(input);

if (N === 0) console.log('0');
let count = 1;
let start = 667;
while (count !== N) {
  // 666 찾기
  const str = String(start);
  if (str.indexOf('666') !== -1) {
    count++;
  }
  start++;
}

console.log(start - 1);
