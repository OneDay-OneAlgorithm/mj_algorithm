function solution(want, number, discount) {
    let answer = 0;
    if(discount.length < 10) return 0;
    
    // 특정 날로부터 10일간 내가 원하는 상품을 얻을 수 있는지 확인하면 됨.
    for(let i = 0 ; i < discount.length - 10 + 1; i++) {
        const itemArr = want.map((item, index) => {
            return Array.from({ length: number[index] }, () => item)
        }).flat()
        
        for(let j = i; j < i + 10; j++) {
            if(itemArr.includes(discount[j])) {
                const itemIdx = itemArr.findIndex(item => item === discount[j]);
                itemArr.splice(itemIdx, 1);
            }    
        }
        
        if(itemArr.length === 0) answer++;
    }
    
    return answer;
}