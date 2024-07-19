function solution(brown, yellow) {
    var answer = [];
    /*
    카펫의 세로 길이(y)는 3 이상이다.
    갈색 격자(brown)와 노란색 격자(yellow)를 합한 값을 y로 나누면 
    나누어 떨어져야 한다. 이때의 몫이 카펫의 가로 길이(x)다.
    갈색 테두리 안에 노란색 격자가 들어있는 형태이므로 x에서 2를 뺀 값과 
    y에서 2를 뺀값을 곱했을 때 yellow가 나와야 한다. 
    */
    let sum = brown + yellow;
    for(let y = 3; y < sum; y++) {
        let x = sum / y;
        if(Number.isInteger(x) && x >= y && (x-2) * (y-2) === yellow) {
            answer.push(x);
            answer.push(y)
            break;
        }
    }
    return answer;
}