const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

// n이 되는 생성자를 찾아야 함
// n + n 을 분해한 값을 더하는 함수
function decomposition(n) {
  let num = n;
  let result = n;
  while (num > 0) {
    result += num % 10;
    num /= 10;
    num = parseInt(num);
  }
  return result;
}

let i = 1;
while (i != n) {
  if (decomposition(i) == n) break;
  i++;
}

if (i == n) {
  console.log(0);
} else {
  console.log(i);
}
