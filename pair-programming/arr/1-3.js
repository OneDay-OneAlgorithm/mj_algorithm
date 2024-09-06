/*
문자열에 들어 있는 모든 공백을 '%20'으로 바꿔 주는 메서드를 작성하라.
*/

const str = "Mr John Smith"

function solution(str) {
    let answer = '';

    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ') {
            answer += '%20';
        } else {
            answer += str[i]
        }
    }

    return answer;
}

console.log(solution(str))
