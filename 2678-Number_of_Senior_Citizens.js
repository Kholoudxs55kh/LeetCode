/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0
    for (let d of details) {
        const age = d.slice(11, 13)
        if (Number(age) > 60) count++
    }

    return count
};

// Runtime 55ms Beats 68.30%
