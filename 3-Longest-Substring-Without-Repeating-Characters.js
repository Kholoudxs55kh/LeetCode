/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let max_len = 0;
    let dict_ = {};

    for (let end = 0; end < s.length; end++) {
        const currChar = s[end];

        if (dict_[currChar] >= start) {
            start = dict_[currChar] + 1;
        }
        dict_[currChar] = end;

        max_len = Math.max(max_len, end - start + 1)
    }

    return max_len;
};