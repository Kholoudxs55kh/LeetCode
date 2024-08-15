/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let row of board) {
        const setRow = new Set()
        for (let i of row) {
            if (setRow.has(i) && i !== \.\) return false
            setRow.add(i)
        }
    }

    // [0, 0], [1,0], [2,0]
    for (let i = 0; i < board.length; i++) {
        const setCol = new Set()
        for (let j = 0;  j < board.length; j++) {
            if (setCol.has(board[j][i]) && board[j][i] !== '.') return false
            setCol.add(board[j][i])
        }
    }

    // 3 * 3
    // 0  => [0,0] [0, 1] [0,2]       ||||||||  [0, 3] [0,4] [0,5]    => final [0,8]
    // 1 => [1,0] [1,1] [1, 2]        ||||||||  [1,3] [1,4]  [1,5]    => final [1,8]
    // 2 => [2,0] [2, 1] [2, 2]       ||||||||   [2, 3], [2,4] [2,5]  => final [2,8]

    // 3  => [3,0] [3, 1] [3,2]       ||||||||  [3, 3] [3,4] [3,5]    => final [3,8]
    // 4 => [4,0] [4,1] [4, 2]        ||||||||  [4,3] [4,4]  [4,5]    => final [4,8]
    // 5 => [5,0] [5, 1] [5, 2]       ||||||||   [5, 3], [5,4] [5,5]  => final [2,8]


    // [6,0] => [6,8]       [8, 0]   => [8,8]
    const setSquare = Array.from({ length: 9 }, () => new Set()); // whyyyyyyyyyy ???
    
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const curr = board[row][col]

            const blockRow = Math.floor(row / 3);
            const blockCol = Math.floor(col / 3);

            const squareIndex = blockRow * 3 + blockCol;

            if (setSquare[squareIndex].has(curr) && curr !== '.') return false

            setSquare[squareIndex].add(curr)
        }
    }

    return true
};