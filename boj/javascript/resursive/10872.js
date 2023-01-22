// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(Number(input)));
