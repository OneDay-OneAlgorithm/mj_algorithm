function solution(priorities, location) {
    let answer = 0;
    
    let target = location;
    while (priorities.length > 0) {
        const currentTask = dequeue(priorities);
        
        const isBest = findMoreThanPriority(priorities, currentTask);
        if (isBest) {
            enqueue(priorities, currentTask);
            target = target === 0 ? priorities.length - 1 : target - 1;
        } else {
            answer++;
            if (target === 0) {
                return answer;
            }
            target = target - 1;
        }
    }
    
    return answer;
}

function findMoreThanPriority(queue, currentTask) {
    return queue.some(task => task > currentTask);
}

function enqueue(queue, item) {
    queue.push(item);
}

function dequeue(queue) {
    return queue.shift();
}
