// 3. 입력값이 여러 줄일 때
/* ex)
110
78
158
*/
const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n');

function recursion(word, left, right, count) {
  if (left >= right) return [1, count];
  if (word[left] != word[right]) return [0, count];
  return recursion(word, left + 1, right - 1, count + 1);
}

function isPalindrome(word) {
  let count = 1;
  return recursion(word, 0, word.length - 1, count);
}

input.forEach((v) => {
  const [a, b] = isPalindrome(v);
  console.log(a, b);
});
