function solution(progresses, speeds) {
    const answer = [];
    
    // 진행 속도에 따라 배포될 수 있지만, 뒤에 있는 기능은 앞에 있는 기능이 먼저 배포 돼야 배포할 수 있다.
    const taskQueue = [...progresses];
    const taskSpeeds = [...speeds];
    
    while(taskQueue.length > 0) {
        update(taskQueue, taskSpeeds);
        
        let count = 0;
        while(taskQueue.length > 0 && taskQueue[0] >= 100) {
            count++;
            taskQueue.shift();
            taskSpeeds.shift();
        }
        
        if(count > 0) {
            answer.push(count);
        }
    }
    
    return answer;
}

function update(progresses, speeds) {
    for(let i = 0; i < progresses.length; i++) {
        if(progresses[i] >= 100) continue;
        progresses[i] += speeds[i]
    }
}
