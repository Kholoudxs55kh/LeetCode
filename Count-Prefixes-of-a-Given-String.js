/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
    /**
    Idea: we have to check every item of the words if it represents a prefix of "S", count them and return the count
    
    Appraoch: 
        itterate over the array and check if every item Could be a prefix of the given s or not

        while itterating we have to keep an eye to count how many of them is valid

        return the count after itteration
     */

    const isPrefix = (w) => {
         for (let i = 0; i < w.length; i++) {
            if (word[i] !== s[i]) return false
        }
        return true
    }

    let count = 0
    for (word of words) {
        // if (word.length > s.length) continue
        // if (s.startsWith(word)) count++
        if (isPrefix(word)) count++
    }

    return count

    // Time Complexity = O(N*M)
    // Space Complexity = O(1)
};