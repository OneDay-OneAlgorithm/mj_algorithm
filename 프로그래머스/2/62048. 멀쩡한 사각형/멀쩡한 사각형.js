function solution(w, h) {
    var answer = w * h;
    return answer - (w+h-gcd(w,h));
}

function gcd(a, b) {
    if(b == 0) return a;
    return gcd(b, a%b);
}