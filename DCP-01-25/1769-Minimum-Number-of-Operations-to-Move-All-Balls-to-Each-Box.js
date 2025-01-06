/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    /**
    Idea:
        transfer all balls to box i for each operation
    Edge Case:
        if one element return ans = [0]
    sudo:
        initialize array ans of length n
        loop over boxes with holding the index i
        loop over boxes again with new index
        compare the index i, j
        count operations between i , j
        add the count to index i in ans array
    */

    let arr = [];
    for (let i = 0; i < boxes.length; i++) {
        let sum = 0;
        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j] == 1) {
                sum += Math.abs(i - j)
            }
        }
        arr.push(sum);
    }
    return arr;
};