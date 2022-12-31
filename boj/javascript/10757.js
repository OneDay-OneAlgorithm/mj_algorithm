// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
/* ex)
        110 78 158
        */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const a = BigInt(input[0]);
const b = BigInt(input[1]);
const result = a + b;
console.log(result.toString());
