/*
주어진 문자열이 회문의 순열인지 아닌지 확인하는 함수를 작성하라
*/

const str = "Tact Coa";

function solution(str) {
    let formatStr = str.toLowerCase().replaceAll(" ", '');

    const charCount = {}

    for(const char of formatStr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    return Object.values(charCount).reduce((acc, cur, idx) => acc + (cur % 2), 0) <= 1;
}

console.log(solution(str))

