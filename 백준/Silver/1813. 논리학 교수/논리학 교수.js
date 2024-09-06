const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const thesis = input[1].split(" ").map(Number);

let result = -1;

for (let x = 0; x <= N; x++) {
  let count = thesis.filter(num => num === x).length;
  if (count === x) {
    result = x;
  }
}

console.log(result);
