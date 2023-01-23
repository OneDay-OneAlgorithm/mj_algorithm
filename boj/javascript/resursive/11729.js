// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

let result = '';
let count = 0;

/**
 * 메뉴 항목을 추가한다.
 * @param {int} num 하노이 탑의 개수
 * @param {string} from 출발지 기둥 번호
 * @param {string} other 목적지 기둥 번호
 * @param {string} to 나머지 기둥 번호
 * @returns {void} 재귀함수
 */
function hanoi(num, from, other, to) {
  if (num == 0) return;
  else {
    hanoi(num - 1, from, to, other);
    result += `${from} ${to}\n`;
    count++;
    hanoi(num - 1, other, from, to);
  }
}

hanoi(N, '1', '2', '3');

console.log(count);
console.log(result);
