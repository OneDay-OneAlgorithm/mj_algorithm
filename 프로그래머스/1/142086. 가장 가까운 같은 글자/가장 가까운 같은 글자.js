function solution(s) {
    const answer = Array.from({ length: s.length }).fill(-1);
    for(let i = 0; i < s.length; i++) {
        const str = s[i];
        const subarr = s.slice(0, i + 1);
        let isFind = false;
        let pos = 1;
        for(let j = i; j > 0; j--) {
            if(str === s[j-1]) {
                isFind = true;   
                break;
            }
            pos++;
        }
        answer[i] = isFind ? pos : -1
    }
    
    return answer;
}