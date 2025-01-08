/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    /**
    Idea:
        -- to make sure the string reads the same forward and backward
        -- Remove all non-alphanum from the string

    Edge Cases:
        -- one letter
        -- empty string

    Approach:
        -- handle all non-alphanums and convert the uppers to lowers
        -- loop over the sts with 2 pointers to make sure they both meet at the same val
        -- return true if the condition is valid, false otherwise.
    */

    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (let start = 0, end = s.length - 1; start < s.length, end >= 0; start++, end--) {
        if (s[start] !== s[end]) return false
    }
    return true
};