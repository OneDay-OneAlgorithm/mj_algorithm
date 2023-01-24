// const fs = require('fs');
// const input = fs
//   .readFileSync('./boj/javascript/input.txt')
//   .toString()
//   .trim()
//   .split('\n');
const input = ['10 500', '93 181 245 214 315 36 185 138 216 295'];
const [n, target] = input[0].split(' ').map((v) => Number(v));
const cards = input[1].split(' ').map((v) => Number(v));

let max = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum <= target) {
        if (max < sum) max = sum;
      }
    }
  }
}

console.log(max);
