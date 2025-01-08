/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
    /**
       Idea:
        -- compare the str1 with the start and the end of the other strings 
        -- index of str1 < index of str2
        -- if applicable return true else return false
        -- return the count applicable pairs
    Edge case:
        -- length of words = 1 => return  0
        -- if str2.length < str1.length => return false
    Approach:
        -- iterate over the words array i = 0 till i < words.length
        -- iterate over the rest of the array
        -- check the result of the condition of prefix and suffix
        -- mainpulate the counter and return it 
        -- In isPrefixAndSuffix function check the condition
        -- if the condition true increment counter 
        -- return count
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