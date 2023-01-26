// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
/* ex)
3
110
78
158
*/
const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n');

const bodyInfo = input.map((v) => v.split(' ').map((value) => Number(value)));

const result = [];
for (const body of bodyInfo) {
  let rank = 1;
  for (let i = 0; i < n; i++) {
    if (body[0] < bodyInfo[i][0] && body[1] < bodyInfo[i][1]) {
      rank++;
    }
  }
  result.push(rank);
}
console.log(result.join(' '));
