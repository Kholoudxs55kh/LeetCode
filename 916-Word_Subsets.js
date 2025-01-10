/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    /**
    Idea:
        -- To make sure the combined substring of words2 exists in words1

    EdgeCase: 
        -- N/A

    Approach:
        -- we count how many times each character appears in every word of words2 => If one word needs 2 'e's and another needs 1 'e', we’ll go with 2 'e's.
        -- keep track of the maxi nums of times each char is needed for every words in words2
        -- for every word in words1, we count how many times each character appears. Then, we compare this count to our maxCount
        -- if both equal => push it to be returned, else => ignore
     */

    let maxCount = {}

    for (let word of words2) {
        let wordCount = {}
        for (let char of word) {
            wordCount[char] = (wordCount[char] || 0) + 1
        }
        for (let char in wordCount) {
            if (maxCount[char]) {
                maxCount[char] = Math.max(maxCount[char], wordCount[char])
            } else {
                maxCount[char] = wordCount[char]
            }
        }
    }

    let subsetWords = []
    for (let word of words1) {
        let wordCount = {}
        for (let char of word) {
            wordCount[char] = (wordCount[char] || 0) + 1
        }
        let isSubset = true
        for (let char in maxCount) {
            if ((wordCount[char] || 0) < maxCount[char]) {
                isSubset = false
                break
            }
        }
        if (isSubset) {
            subsetWords.push(word)
        }
    }

    return subsetWords
};
