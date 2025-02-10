/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let set = new Set()
    let count = 0
    
    for (const char of s) {
        if (set.has(char)) {
\t\t\tcount += 2
            set.delete(char)
        } 
\t\telse set.add(char)
    }

    return count + (set.size > 0 ? 1 : 0)
};