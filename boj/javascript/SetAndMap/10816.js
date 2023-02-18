const fs = require('fs');
const input = fs
  .readFileSync('boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n');

const N = input[0];
const hasCards = input[1].split(' ');
const M = input[2];
const checkCards = input[3].split(' ');

const cardsMap = new Map();
for (const card of hasCards) {
  if (cardsMap.has(card)) {
    const value = cardsMap.get(card);
    cardsMap.set(card, value + 1);
  } else {
    cardsMap.set(card, 1);
  }
}

let result = '';
for (const card of checkCards) {
  if (cardsMap.has(card)) {
    result += cardsMap.get(card);
  } else {
    result += '0';
  }
  result += ' ';
}

console.log(result);
