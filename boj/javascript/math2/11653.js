// 1. 입력값이 한 개일 때(한 줄)
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

let data = parseInt(9991);
if (data === 1) return;

let start = 2;
while (data >= 2) {
  // const result = isPrime(data);
  // if (result) {
  //   console.log(data);
  //   break;
  // }
  if (data % start === 0) {
    console.log(start);
    data = data / start;
  } else {
    start++;
  }
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
