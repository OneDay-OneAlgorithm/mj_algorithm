function solution(n,a,b)
{
    var answer = 1;
    
    while(Math.ceil(a/2) !== Math.ceil(b/2)) {
        a = a / 2;
        b = b / 2;
        answer++;
    }

    return answer;
}