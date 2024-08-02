/*
동굴 탐색 문제
문제 설명
2차원 배열로 표현된 동굴이 있습니다. 이 동굴에는 탐험 가능한 지역과 물웅덩이(탐험 불가능한 지역)가 있습니다. 탐험가들은 동굴을 탐험하려고 합니다.
규칙

탐험은 상하좌우로만 이동할 수 있습니다 (대각선 이동 불가).
물웅덩이는 탐험할 수 없습니다.
한 번 탐험한 지역은 다시 방문할 수 없습니다.
각 탐험가는 자신이 시작한 위치에서 연결된 모든 탐험 가능한 지역을 탐험합니다.

목표
동굴의 모든 탐험 가능한 지역을 탐험하기 위해 필요한 최소 탐험가 수를 구하는 것입니다.
입력

cave: N x M 크기의 2차원 배열

0: 탐험 가능한 지역
1: 물웅덩이 (탐험 불가능한 지역)



출력

필요한 최소 탐험가 수 (정수)

제약 조건

1 ≤ N, M ≤ 1000 (동굴의 크기)
동굴의 가장자리는 항상 물웅덩이(1)로 둘러싸여 있다고 가정합니다.

예시 1
입력:
Copy[
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
]
출력: 1
설명: 이 예시에서는 한 명의 탐험가가 모든 탐험 가능한 지역을 탐험할 수 있습니다. (1,1)에서 시작하여 모든 '0' 지역을 탐험할 수 있습니다.
예시 2
입력:
Copy[
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1]
]
출력: 2
설명: 이 예시에서는 두 명의 탐험가가 필요합니다. 한 명은 왼쪽 상단의 연결된 '0' 지역을 탐험하고, 다른 한 명은 오른쪽의 연결된 '0' 지역을 탐험합니다.@
*/

function minExplorers(cave) {
    const rows = cave.length;
    const cols = cave[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    let explorerCount = 0;

    function dfs(row, col) {
        if (row < 0 || row >= rows || col < 0 || col >= cols || cave[row][col] === 1 || visited[row][col]) {
            return;
        }

        visited[row][col] = true;

        // 상하좌우 탐색
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (cave[i][j] === 0 && !visited[i][j]) {
                dfs(i, j);
                explorerCount++;
            }
        }
    }

    return explorerCount;
}

// 테스트
const cave1 = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
];

const cave2 = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1]
];

console.log("Example 1 result:", minExplorers(cave1));
console.log("Example 2 result:", minExplorers(cave2));
