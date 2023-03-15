const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n');

function eratos(n) {
  let arr = Array(n + 1).fill(true);
  arr[0] = arr[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}

const primeArr = eratos(1000000);
let result = [];
for (let i = 0; i < n; i++) {
  let count = 0;
  for (let j = 1; j < Math.floor(input[i] / 2) + 1; j++) {
    // N = index + (N - index), if isPrime i and num - i
    if (primeArr[j] && primeArr[input[i] - j]) count++;
  }
  result.push(count);
}

console.log(result.join(' '));
