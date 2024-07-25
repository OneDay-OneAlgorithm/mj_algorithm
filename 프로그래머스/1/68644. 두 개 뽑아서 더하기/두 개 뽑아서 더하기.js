function solution(numbers) {
    const answer = new Set();
    numbers.forEach((first, firstIdx) => 
        numbers.forEach((second, secondIdx) => {
            if(!(firstIdx === secondIdx))
                answer.add(first + second)
    }))
    return Array.from(answer).sort((a,b) => a-b);
}