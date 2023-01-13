const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n');

//   compareFunction(a, b)반환값이 0보다 작으면, a의 index가 b보다 작다.
//     반환값이 0보다 크면, b의 index가 a보다 작다.
input.sort((a, b) => {
  if (a.length === b.length) {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  } else if (a.length > b.length) {
    return 1;
  } else {
    return -1;
  }
});

const set = new Set(input);
const setArr = Array.from(set);
console.log(setArr.join('\n'));
