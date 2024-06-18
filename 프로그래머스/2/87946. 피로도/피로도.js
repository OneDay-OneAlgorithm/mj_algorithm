function solution(k, dungeons) {
    
    const results = [];
    const arrSize = dungeons.length;
    for (let i = 0; i < arrSize; i++) {
        const remaining = [...dungeons.slice(0, i), ...dungeons.slice(i + 1)];
        permutations([dungeons[i]], remaining, results);
    }
    
    const countArr = results.map((result) => {
        let myFatigue = k;
        const count = result.reduce((acc, [minFatigue, consumeFatigue], idx) => {
            if(myFatigue >= minFatigue) {
                myFatigue -= consumeFatigue;
                return acc + 1;
            }
            return acc;
        }, 0)
        return count;
    })
    
    
    
    return Math.max(...countArr);
}


function permutations(current, remaining, results) {
    if (remaining.length === 0) {
        results.push(current);
        return;
    }

    for (let i = 0; i < remaining.length; i++) {
        const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
        permutations([...current, remaining[i]], newRemaining, results);
    }
}