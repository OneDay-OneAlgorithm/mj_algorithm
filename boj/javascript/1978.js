// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
/* ex)
3
110 78 158
*/
const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const data = input.trim().split(' ');

let sum = 0;
for (let index = 0; index < data.length; index++) {
  const result = isPrime(data[index]);
  sum += result ? 1 : 0;
}

console.log(sum);

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
