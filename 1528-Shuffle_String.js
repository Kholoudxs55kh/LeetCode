/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let restored = [];
    
    for (let i = 0; i < s.length; i++) {
        restored[indices[i]] = s[i];
    }
    
    return restored.join('');
};

// Runtime 48ms Beats 94.54%
