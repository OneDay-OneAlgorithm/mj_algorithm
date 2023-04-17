// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
/* ex)
110 78 158
*/
const fs = require('fs');
const input = fs
  .readFileSync('boj/javascript/input.txt')
  .toString()
  .trim()
  .split(' ');
const [N, M] = input.map((v) => parseInt(v));

const numbers = [];
const isUsed = new Array(N + 1).fill(false);

// index보다 큰 값만 call push할 수 있도록 함수의 인자로 전달하여 기억한다.
function backtracking(idx, depth) {
  if (depth === M) {
    console.log(numbers.join(' '));
    return;
  }

  for (let i = idx; i < N; i++) {
    if (!isUsed[i]) {
      numbers.push(i + 1);
      isUsed[i] = true;
      backtracking(i, depth + 1);
      isUsed[i] = false;
      numbers.pop();
    }
  }
}

backtracking(0, 0);
