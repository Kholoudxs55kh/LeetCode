/**
 * @param {string[]} arr
 * @return {number}
//  */
// var maxLength = function (arr) {
//     /**
//     Idea:
//         givin arr
//     Edge Cases:
//         -- same char in the same string ex: ['uun']
//     Approch:
//         loop over arr to exclude duplicate chars in the same string(edge case)
//         make every combination and check for duplicates and drop them
    
//      */
//     function isUnique(str) {
//         let set = new Set(str)
//         return set.size === str.length
//     }

//     let uniqueArr = []
//     for (let str of arr) {
//         if (isUnique(str)) uniqueArr.push(str)
//     }

//     let maxLen = 0

//     for (let i = 0; i < uniqueArr.length; i++) {
//         let curr = uniqueArr[i]
//         maxLen = Math.max(maxLen, curr.length);

//         for (let j = i + 1; j < uniqueArr.length; j++) {
//             let combined = curr + uniqueArr[j]

//             console.log(combined)

//             if (isUnique(combined)) {
//                 maxLen = Math.max(maxLen, combined.length)
//             }
//         }
//     }

//     return maxLen
// };

var maxLength = function(arr) {
    let result = [0];
    dfs(arr, "", 0, result);
    return result[0];
};

function dfs(arr, path, idx, result) {
    if (isUniqueChars(path)) {
        result[0] = Math.max(result[0], path.length);
    }

    if (idx === arr.length || !isUniqueChars(path)) {
        return;
    }

    for (let i = idx; i < arr.length; i++) {
        dfs(arr, path + arr[i], i + 1, result);
    }
}

function isUniqueChars(s) {
    let charSet = new Set();
    for (let c of s) {
        if (charSet.has(c)) {
            return false;
        }
        charSet.add(c);
    }
    return true;
}