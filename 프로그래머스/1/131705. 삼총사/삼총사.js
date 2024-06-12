function solution(numbers) {
    const answer = findSumOfZero(numbers);
    return answer;
}

function findSumOfZero(numbers){
    let result = 0;
    const size = numbers.length;
    for(let i = 0; i < size - 2; i++) {
        for(let j = i + 1; j < size - 1; j++) {
            for(let k = j + 1; k < size; k++) {
                const sum = numbers[i] + numbers[j] + numbers[k];
                if(sum === 0)
                    result++;
            }
        }
    }
    return result;
}