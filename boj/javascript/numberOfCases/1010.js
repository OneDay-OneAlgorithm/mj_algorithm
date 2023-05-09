const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./boj/javascript/input.txt')
  .toString()
  .trim()
  .split('\n');

const dp = Array.from(Array(30), () => Array(30).fill(0));

for(let sight of input) {
    const [left, right] = sight.split(' ');
    
    // 1개의 사이트만 있는 경우 각 사이트마다 다리를 하나 지을 수 있다. 
    for(let i = 1; i <= right; i++) {
        dp[1][i] = i;
        // 2개 이상의 사이트가 있는 경우 
        for(let j =2; j<= i; j++) {
            dp[j][i] = dp[j-1][i-1] + dp[j][i-1];
        }
    }
    console.log(dp[left][right]);
}