// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
/* ex)
110 78 158
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [N, M] = input.map((v) => parseInt(v));
const numbers = [];
const isUsed = new Array(N + 1).fill(false);

function backtracking(depth) {
  // 수열의 길이가 완성되었을 때 출력하고 종료
  if (depth === M) {
    console.log(numbers.join(' '));
    return;
  }

  // 1부터 N까지의 경우의 수 탐색
  for (let i = 1; i <= N; i++) {
    if (!isUsed[i]) {
      numbers.push(i);
      isUsed[i] = true;
      backtracking(depth + 1);
      isUsed[i] = false;
      numbers.pop();
    }
  }
}

backtracking(0);
