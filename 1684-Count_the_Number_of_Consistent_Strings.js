/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allow = new Set(allowed)
    let count = 0

    for (word of words) {
        let flag = true;
        for (let c of word) {
            if (!allow.has(c)) {
                flag = false;
                break;
            }
        }
        if (flag) count++;
    }

    return count;
};

// Runtime 85ms Beats 58.16%
