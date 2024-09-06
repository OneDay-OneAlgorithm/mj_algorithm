const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

console.log(input[0], input[1]);

const N = +input[0];
const thesis = input[1].split(" ").map(Number);

let result = -1;
for (let x = N; x >= 0; x--) {
  let count = thesis.filter((s) => s === x).length;
  if (count === x) {
    result = x;
    break;
  }
}

console.log(result);
