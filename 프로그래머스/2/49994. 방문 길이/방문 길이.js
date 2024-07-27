function solution(dirs) {
    const set = new Set();
    let x = 0, y = 0;
    console.log('x is', x)
    console.log('y is', y)
    
    dirs.split('').forEach((dir) => {
        const [nx, ny] = updateLocation(x, y, commands[dir]);
        
        if(isValidPosition(nx, ny)) {
            set.add(`${x}${y}${nx}${ny}`);
            set.add(`${nx}${ny}${x}${y}`);
            [x, y] = [nx, ny];
        }
        
    })
    
    return set.size / 2;
}

function updateLocation(x, y, dir) {
    switch(dir) {
        case commands.U: 
            return [x, y + 1];
        case commands.D:
            return [x, y - 1];
        case commands.R:
            return [x + 1, y];
        case commands.L:
            return [x - 1, y];
        default:
            throw new Error('Not exist command');
    }
}

function isValidPosition(nx, ny) {
    return (
        nx >= -5 && nx <= 5 &&
        ny >= -5 && ny <= 5
    )
}

const commands = {
    'U': 'up',
    'D': 'down',
    'R': 'right',
    'L': 'left'
}