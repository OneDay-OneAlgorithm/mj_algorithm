function solution(friends, gifts) {
    const giftTable = {};
    const receiveTable = {};
    
    friends.forEach(friend => {
        giftTable[friend] = {};
        friends.forEach(f => {
            if (friend !== f) {
                giftTable[friend][f] = 0;
            }
        });
        receiveTable[friend] = 0;
    });

    gifts.forEach(gift => {
        const [passer, target] = gift.split(" ");
        if (passer !== target) {
            giftTable[passer][target]++;
            receiveTable[target]++;
        }
    });
    
   const giftScores = friends.map(friend => {
        // 준선물  - 받은 선물 
        const givenGifts = Object.values(giftTable[friend]).reduce((acc, cur) => acc + cur, 0)
        const receiveGifts = receiveTable[friend];
        return givenGifts - receiveGifts;
    });
    
    // 다음 달에 선물을 더 많이 받을 친구를 골라야 함.
    // 더 많은 선물을 준 경우에 다음 달에 하나 받음
    const nextMonthGiftCount = Array.from({ length: friends.length }, () => 0);
    friends.forEach((friend, index) => {
        // 어떤 사람한테 선물을 받는지 알아내야 함. 
        // muzi가 ryan, frodo, neo에게 선물을 더 많이 줬는지 확인
        Object.entries(giftTable[friend]).forEach(([otherFriend, givenGift]) => {
            // 내가 친구보다 많이 줬다면
            const receiveGift = giftTable[otherFriend][friend];
            if(givenGift > receiveGift) {
                nextMonthGiftCount[index]++;
            }
            if(receiveGift === givenGift) {
                // 선물 지수 계산
                const myGiftScore = giftScores[index];
                const friendGiftScore = giftScores[friends.findIndex(v => v === otherFriend)]
                if(myGiftScore > friendGiftScore) {
                    nextMonthGiftCount[index]++;
                }
            }
        })
    })

    
    return Math.max(...nextMonthGiftCount);
}

    