/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    /**
    - Idea:
        -- we have a 2D array length of all is 9, arr.len & arr[0].len = 9
        -- we have to make sure that every row/column and 1/3 row && 1/3 column contains unique chars from 1-9
        -- the array will have empty cells with \.\ marking it
        -- if the sudoko is valid return true, not return false

    - Edge Cases:
        -- NA

    - Approach:
        -- check every column , to check ever i of the row \doesn't contain duplicates\
        -- check every row, check the whole i of the board \doesn't contain duplicates\
        -- have a way to check the sub array \doesn't contain duplicates\
            -- 2 - 5 - 8 
            -- to step by +3

            set = > py, js

            -- handle the \.\
            -- we can use a key-numbered dict 1-9
     */

    for (let row of board) {
        let set = new Set()

        for (let i of row) {
            if (i === \.\) continue
            if (set.has(i)) return false
            set.add(i)
        }
    }

    for (let i = 0; i < 9; i++) {
        let set = new Set()

        for (let j = 0; j < 9; j++) {
            if (board[j][i] === \.\) continue
            if (set.has(board[j][i])) return false
            set.add(board[j][i])
        }
    }

    for (let box = 0; box < 9; box++) {
        let set = new Set();
        let startRow = Math.floor(box / 3) * 3;
        let startCol = (box % 3) * 3;

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                let cell = board[startRow + row][startCol + col];
                if (cell === \.\) continue;
                if (set.has(cell)) return false;
                set.add(cell);
            }
        }
    }

    return true;
};