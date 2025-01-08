/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
    /**
    Idea:
    
    Edge Cases:

    Approach:
     */

    function isPrefixAndSuffix(str1, str2) {
        if (str1.length > str2.length) return false

        if (str2.startsWith(str1) && str2.endsWith(str1)) return true

        return false
    }

    let counter = 0
    for (let i = 0; i < words.length; i++) {

        for (let j = i + 1; j < words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) counter++
        }

    }

    return counter
};