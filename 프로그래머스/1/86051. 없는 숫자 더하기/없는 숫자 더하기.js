function solution(numbers) {
    var answer = 0;
    let exists;
    for(let i = 0; i <= 9; i++){
        exists = 0;
        for(let j = 0; j < numbers.length; j++){
            if(i == numbers[j]){
                exists = 1;
                break;
            }
        }
        if(exists == 0){
            answer += i;
        }
    }
    return answer;
}