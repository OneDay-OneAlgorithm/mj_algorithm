function solution(toppings) {
    const totalCount = toppings.length;
    const leftCount = new Set();
    const rightCount = new Map();
    
    toppings.forEach(topping => {
        rightCount.set(topping, (rightCount.get(topping) || 0) + 1);
    });

    let answer = 0;
    
    for (let i = 0; i < totalCount; i++) {
        const topping = toppings[i];
        
        leftCount.add(topping);
        
        rightCount.set(topping, rightCount.get(topping) - 1);
        if (rightCount.get(topping) === 0) {
            rightCount.delete(topping);
        }

        if (leftCount.size === rightCount.size) {
            answer++;
        }
    }
    
    return answer;
}
