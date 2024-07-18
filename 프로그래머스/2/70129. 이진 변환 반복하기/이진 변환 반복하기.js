function solution(s) {

    let count = 0;
    let zeroCnt = 0;
    
    while(s !== '1') {
        s = s.split('')
        zeroCnt += s.length - s.filter(v => v !== '0').length
        s = s.filter(v => v !== '0').length.toString(2)
        count++;
    }
    
    return [count, zeroCnt];
}