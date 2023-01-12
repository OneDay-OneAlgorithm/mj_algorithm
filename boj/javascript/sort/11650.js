const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((v) => Number(v)));

//   compareFunction(a, b)반환값이 0보다 작으면, a의 index가 b보다 작다.
//     반환값이 0보다 크면, b의 index가 a보다 작다.

input.sort((a, b) => {
  if (a[0] === b[0]) {
    if (a[1] > b[1]) {
      return 1;
    } else {
      return -1;
    }
  } else if (a[0] > b[0]) {
    return 1;
  } else {
    return -1;
  }
});
console.log(input.map((v) => v.join(' ')).join('\n'));
