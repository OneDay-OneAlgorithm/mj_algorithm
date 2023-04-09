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
  .split('\n');

const [n, ...data] = input.map((v) => Number(v));

const stack = [];
let answer = '';
let j = 1;
for (let i = 0; i < n; i++) {
  const find = data.shift();
  while (j <= find) {
    stack.push(j);
    answer += '+';
    j++;
  }

  let num = stack.pop();
  if (num != find) {
    answer = 'NO';
    break;
  }
  answer += '-';
}

if (answer === 'NO') {
  console.log('NO');
} else {
  console.log(answer.split('').join('\n'));
}
