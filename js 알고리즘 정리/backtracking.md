# 백트레킹
## 구현 코드
```js
// N과 M, 백준 15649번 문제 
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
```
### 구현 코드 설명

> 문제: 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열을 찾아라.

코드에서는 1부터 N까지 중복을 없애기 위해 1부터 N까지의 백트레킹을 통해서 문제의 해를 찾고 있다. 1일때의 경우의 수에서 올바르지 않으면 재귀를 통해서 기존의 값을 찾아간다. 만일 해를 발견하면 결과에 추가해주고 종료한다. 


## 설명
백트레킹은 문제 해결을 위해 후보군을 탐색하다가 해결책으로 이어질 가능성이 없는 경우 이전의 단계로 돌아가 다른 후보군을 탐색하는 알고리즘이다. 
백트레킹은 재귀함수를 사용하여 많이 구현한다. 