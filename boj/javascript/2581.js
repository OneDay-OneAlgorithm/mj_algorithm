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
  .map((v) => parseInt(v));

const [M, N] = input;

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const arr = [];
for (let start = M; start <= N; start++) {
  const result = isPrime(start);
  if (result) arr.push(start);
}

if (arr.length < 1) console.log(-1);
else {
  const sum = arr.reduce((acc, cur) => acc + cur);
  console.log(sum + '\n' + Math.min(...arr));
}
