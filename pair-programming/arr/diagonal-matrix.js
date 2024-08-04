/*
[
    [ 1, 2, 6, 7, 15 ],
    [ 3, 5, 8, 14, 16 ],
    [ 4, 9, 13, 17, 22 ],
    [ 10, 12, 18, 21, 23 ],
    [ 11, 19, 20, 24, 25 ]
]
*/
function generateZigzagDiagonalMatrix(n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    let num = 1;
    let row = 0, col = 0;

    while (num <= n * n) {
        // 오른쪽 위로 이동
        while (row >= 0 && col < n) {
            result[row][col] = num++;
            row--;
            col++;
        }
        
        // 다음 시작점 조정
        row++;
        if (col >= n) {
            col = n - 1;
            row += 1;
        }

        // 왼쪽 아래로 이동
        while (row < n && col >= 0) {
            result[row][col] = num++;
            row++;
            col--;
        }

        // 다음 시작점 조정
        col++;
        if (row >= n) {
            row = n - 1;
            col += 1;
        }
    }

    return result;
}

// 테스트
console.log(generateZigzagDiagonalMatrix(5));
console.log(generateZigzagDiagonalMatrix(6));
