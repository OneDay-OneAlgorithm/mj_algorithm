function solution(s) {
    const arr = s.toLowerCase().split(' ')
    return arr.map(v =>  v.charAt(0).toUpperCase() + v.slice(1)).join(' ');
}