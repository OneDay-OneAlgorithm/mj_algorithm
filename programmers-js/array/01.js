const input = [
  [1, -5, 2, 4, 3],
  [2, 1, 1, 3, 2, 5, 4],
  [1, 6, 7],
];

function solution(arr) {
  return arr.sort((a, b) => a - b);
}

input.forEach((arr) => {
  console.log(solution(arr));
});
