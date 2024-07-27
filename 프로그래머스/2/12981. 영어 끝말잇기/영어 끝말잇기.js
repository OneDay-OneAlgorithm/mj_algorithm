function solution(n, words) {
    let answer = 0;    
    for(let i = 1; i < words.length; i++) {
        if(words.indexOf(words[i]) != i || 
           words[i-1][words[i-1].length-1] != words[i][0]) {
            answer = i + 1;
            break;
        }
    }
    return answer ? [answer % n || n, Math.ceil((answer/n))]:[0, 0];
}