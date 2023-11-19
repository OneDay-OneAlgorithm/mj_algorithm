const input = require("fs")
  .readFileSync("../../../input.txt")
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, sequence, operator] = input;

const mapping = ["+", "-", "*", "/"];

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

function dfs(count, result) {
  if (count === N - 1) {
    max = Math.max(max, result);
    min = Math.min(min, result);
    return;
  } else {
    for (let i = 0; i < operator.length; i++) {
      if (operator[i] === 0) continue;
      operator[i]--;
      dfs(count + 1, operation(result, sequence[count + 1], mapping[i]));
      operator[i]++;
    }
  }
}

dfs(0, sequence[0]);

function operation(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return parseInt(a / b);
  }
}

console.log(max ? max : 0);
console.log(min ? min : 0);
