/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // if (stones.length > 1) { // [2,7,4,1,8,1]
    //     stones.sort((a, b) => b - a)
    //     console.log(stones)
    // }

    // return stones[0]

    let stoneQ = new MaxPriorityQueue();

    for (let stone of stones) stoneQ.enqueue(stone) // O(n) => sort()

    while (stoneQ.size() > 1) { // O(logn)
        let y = stoneQ.dequeue().element // 8 // [7, 4,2, 1,1] - // 4 
        // [2, 1, 1,1] // 2 // 1
        let x = stoneQ.dequeue().element // 7 // [ 4,2, 1,1] - // 2
        // [1, 1 , 1] // 1 // 1

        const abs = y - x // 1  // [4,2, 1 , 1, 1] - 
        // 4 - 2 = 2 
        // 2 -1 = 1
        // 1 -1 = 0
        if (abs === 0) continue
        stoneQ.enqueue(abs) // [2, 1, 1, 1]
         // [1, 1, 1]
         // [1]
    }

    // time complixity  = Onlogn
    // Space complicity = O(n)

    return stoneQ.size() === 1 ? stoneQ.dequeue().element : 0
};