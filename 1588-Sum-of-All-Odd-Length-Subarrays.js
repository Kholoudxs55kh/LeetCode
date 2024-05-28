/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        // console.log(currentSum)
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            if ((j - i + 1) % 2 === 1) {
                res += currentSum;
            }
            console.log(res)
        }
    }

    return res;
};