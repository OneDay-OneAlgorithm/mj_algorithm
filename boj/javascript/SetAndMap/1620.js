// N = 도감에 수록되어 있는 포켓몬의 개수
// M = 맞춰야 하는 문제의 개수
// 2부터 N까지의 입력은 포켓몬
// N부터 M까지는 맞춰야 하는 문제
// 문제가 알파벳이면 포켓몬 번호를 말함.
// 문제가 숫자면 포켓몬 번호에 해당하는 문자를 출력
// 3. 입력값이 여러 줄일 때
/* ex)
110
78
158
*/
const fs = require('fs');
const input = fs
  .readFileSync('boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n');
const [N, M] = input[0].split(' ').map((v) => Number(v));
const pokemons = input.slice(1, N + 1);
const quizs = input.slice(N + 1);

const map = new Map();

let count = 1;
for (const pokemon of pokemons) {
  map.set(pokemon, count);
  map.set(String(count), pokemon);
  count++;
}

for (const quiz of quizs) {
  console.log(map.get(quiz));
}
