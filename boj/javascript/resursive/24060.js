// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
/* ex)
3
110 78 158
*/
const fs = require('fs');
const [n, input] = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n');

const [a, k] = n.split(' ');
const arr = input.split(' ').map((v) => Number(v));

function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
      count++;
      if (count == k) target = sortedArr.at(-1);
    } else {
      sortedArr.push(right.shift());
      count++;
      if (count == k) target = sortedArr.at(-1);
    }
  }
  while (left.length !== 0) {
    sortedArr.push(left.shift());
    count++;
    if (count == k) target = sortedArr.at(-1);
  }
  while (right.length !== 0) {
    sortedArr.push(right.shift());
    count++;
    if (count == k) target = sortedArr.at(-1);
  }
  return sortedArr;
}

let count = 0;
let target;
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
mergeSort(arr);
if (!target) target = -1;
console.log(target);
