function solution(maps) {
    const y = maps.length;
    const x = maps[0].length;
    
    const directions = [
        [1, 0], // 아래
        [-1, 0], // 위
        [0, 1], // 오른쪽
        [0, -1], // 왼쪽
    ];
    
    const visited = Array.from({ length: y }, () => Array.from({ length: x }, () => false));
    
    const queue = [[0, 0, 1]]; // 시작점에서부터의 거리 
    let head = 0;
    
    visited[0][0] = true;
    
    while (head < queue.length) {
        const [curY, curX, distance] = queue[head++];
        
        if (curY === y - 1 && curX === x - 1) {
            return distance;
        }
        
        for (const [dy, dx] of directions) {
            const ny = curY + dy;
            const nx = curX + dx;
            
            if (ny >= 0 && ny < y && nx >= 0 && nx < x && maps[ny][nx] === 1 && !visited[ny][nx]) {
                queue.push([ny, nx, distance + 1]);
                visited[ny][nx] = true;
            }
        }
    }
    
    return -1;
}
