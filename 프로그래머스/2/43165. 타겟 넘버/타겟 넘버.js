function solution(numbers, target) {
    const answer = [];
    
    function dfs(numbers, result) {
        if(numbers.length === 0) {
            if(result === target) answer.push(result);
            return;
        }
        
        const number = numbers[0]
        dfs(numbers.slice(1), result+number)
        dfs(numbers.slice(1), result-number)
    }
    const number = numbers[0]
    dfs(numbers.slice(1), +number)
    dfs(numbers.slice(1), -number)
    
    return answer.length;
}