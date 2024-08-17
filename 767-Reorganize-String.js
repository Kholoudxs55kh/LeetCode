/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let freqMap = new Map();
    
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    let maxHeap = [];
    for (let [char, count] of freqMap) {
        maxHeap.push([count, char]);
    }
    maxHeap.sort((a, b) => b[0] - a[0]);

    let result = [];
    let prev = null;

    while (maxHeap.length > 0) {
        let [count, char] = maxHeap.shift();
        result.push(char);
        count--;

        if (prev && prev[0] > 0) {
            maxHeap.push(prev);
        }

        maxHeap.sort((a, b) => b[0] - a[0]);

        prev = [count, char];
    }

    return result.length === s.length ? result.join('') : '';
};

// var reorganizeString = function(s) {
//     let sArr = Array.from(s);
//     sArr.sort();

//     for (let i = 1; i < sArr.length; i++) {
//         if (sArr[i] === sArr[i - 1]) {
//             let swapIdx = i + 1;

//             while (swapIdx < sArr.length && sArr[i] === sArr[swapIdx]) swapIdx++;

//             if (swapIdx < sArr.length) {
//                 let temp = sArr[i];
//                 sArr[i] = sArr[swapIdx];
//                 sArr[swapIdx] = temp;

//                 console.log(sArr);
//             } else return ""; 

//         }
//     }

//     return sArr.join(""); 
// }

    // let sArr = Array.from(s); // ['a', 'a', 'b']
    
    // sArr.sort(); // ['a', 'a', 'b']

    // for (let i = 1; i < sArr.length; i++) {
    //     if (sArr[i] === sArr[i - 1]) { // if (sArr[1] === sArr[0]) => check prev 
    //         let swapIndex = i + 1;  // swapIndex = 2
    //         while (swapIndex < sArr.length && sArr[swapIndex] === sArr[i]) { // 2 < length && swapIndexVal = currVal
    //             swapIndex++; // swap = 3
    //         }
    //         if (swapIndex < sArr.length) {
    //             [sArr[i], sArr[swapIndex]] = [sArr[swapIndex], sArr[i]]; // => swap
    //         } else {
    //             return "";
    //         }
    //     }
    // }
    
    // return sArr.join(''); // 