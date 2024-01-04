/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let seen = {};
    let output = [];

    if (!nums.length) {
        return output;
    }

    for (let i of nums) {
        if (seen.hasOwnProperty(i)) {
            seen[i] += 1;
        } else {
            seen[i] = 1;
        }
    }

    let sorted = Object.entries(seen)
        .sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        output.push(Number(sorted[i][0]));
    }

    return output;
};

// tried this but didn't work

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var topKFrequent = function(nums, k) {
//     let seen = {};
//     let output = [];

//     nums.forEach(num => {
//         if (seen.hasOwnProperty(num)) {
//             seen[num]++;
//         } else {
//             seen[num] = 1;
//         }
//     });

//     for (let num in seen) {
//         if (seen[num] >= k) {
//             output.push(Number(num));
//         }
//     }

//     return output;
// };

