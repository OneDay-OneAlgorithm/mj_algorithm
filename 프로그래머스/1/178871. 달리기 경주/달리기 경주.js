function solution(players, callings) {
    // object로 만들어 해결해야 함.
    // 왜 key로 랭킹을 가질까? 공통적으로 사용하기 편하네.
    const nameObj = {};
    const rankObj = {};
    
    players.forEach((player, index) => {
        rankObj[index+1] = player;
        nameObj[player] = index+1;
    })
    
    callings.forEach((call, index) => {
        // temp는 call된 유저보다 index가 낮은 선수.
        const temp = [rankObj[nameObj[call]-1], nameObj[call]-1]; 
        // 3위는 kai가 됨.
        rankObj[temp[1]] = call;
        // 4위는 poe가 됨.
        rankObj[nameObj[call]] = temp[0];
        // kai는 3위가 됨.
        nameObj[call] = temp[1];
        // poe는 4위가 됨. 
        nameObj[temp[0]] = temp[1] + 1;
    })

    
    
    
    return Object.values(rankObj);
}
