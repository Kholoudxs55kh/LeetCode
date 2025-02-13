/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    let count = 0;
    for (let row = 0; row < boxGrid.length; row++) {
        count = 0;
        for (let col = 0; col < boxGrid[row].length; col++) {
            if (boxGrid[row][col] === '#') {
                boxGrid[row][col] = '.';
                count += 1;
            }
            if (boxGrid[row][col] === '*' && count > 0) {
                let tempcol = col - 1;
                while (count > 0) {
                    boxGrid[row][tempcol--] = '#';
                    count--;
                }
                count = 0;
            }
            if (col === boxGrid[row].length - 1 && count > 0) {
                let tempcol = col;
                while (count > 0) {
                    boxGrid[row][tempcol--] = '#';
                    count--;
                }
                count = 0;
            }
        }
    }
    const res = [];
    for (let col = 0; col < boxGrid[0].length; col++) {
        res[col] = [];
        for (let row = boxGrid.length - 1; row >= 0; row--) {
            res[col].push(boxGrid[row][col]);
        }
    }
    return res;
};