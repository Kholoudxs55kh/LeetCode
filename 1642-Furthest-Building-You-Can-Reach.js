/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    let i;
    let arr = new Array(ladders).fill(0)
    
    for (i = 1; i < heights.length; i++) {
        let jump = heights[i] - heights[i - 1]
        if (jump > 0) {
                let j = arr.length - 1
            if (jump > arr[0]){
                while (j >= 0 && arr[j] > jump) j--
                bricks -= arr.shift()
                arr.splice(j,0,jump)
            } else bricks -= jump

            if (bricks < 0) return i - 1
        }
    }
    return i - 1
};