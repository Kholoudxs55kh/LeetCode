/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    return s.split(" ").splice(0, k).join(" ")
};

// Runtime 43ms Beats 94.23%
