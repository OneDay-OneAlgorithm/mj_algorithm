// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim();

const dp = [0, 1, 1];

function fibo(n) {
  if (n <= 2) return 1;
  if (dp[n]) return dp[n];
  return (dp[n] = fibo(n - 1) + fibo(n - 2));
}
fibo(10);
console.log(dp[Number(0)]);
