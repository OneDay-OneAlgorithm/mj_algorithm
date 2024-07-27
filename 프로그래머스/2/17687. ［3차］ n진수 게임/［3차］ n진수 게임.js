// n 진법
// t 미리 구할 숫자의 개수 
// m 참여 인원
// p 튜브의 순서
function solution(n, t, m, p) {
    let str = '';
    let answer = '';
    
    for(let i = 0; i < m * t; i++) { 
        str += i.toString(n).toUpperCase()
    }
    
    for(let i = p - 1; i < m * t; i += m) {
        answer += str[i]
    }
    
    
    return answer;
}