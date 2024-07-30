// input 5 2
const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString().trim();
const [N, K] = input.split(" ").map(Number);
const dp = Array.from({ length: Math.max(N, K) }).fill(0);
dp[1] = 1;

// output 10
// answer 
// n!/(n-k)!k!
console.log(
    factorial(N) / (factorial(N-K)*factorial(K))
)

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
