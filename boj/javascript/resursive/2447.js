// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

let result = '';

const star = (i, j, num) => {
  if (i % 3 === 1 && j % 3 === 1) {
    result += ' ';
  } else if (num === 1) {
    result += '*';
  } else {
    star(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    star(i, j, n);
  }
  result += '\n';
}

console.log(result);
