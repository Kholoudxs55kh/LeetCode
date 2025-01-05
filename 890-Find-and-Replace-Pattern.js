/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    /**
    Idea:
        -- given an arr of strs and a pattern, return the values that matches the patterns 

    Edge Cases:
        -- NAN

    Approach:
        -- "abb"
        -- { 0: 1, 1: 2, 2: 2 }
        - set

        convert them into hashMap and check frequancy
        after checking the frequency, start checking the pattern
        store all strs that matches the pattern anr return them
     */

    if (pattern.length === 1) return words

    const result = []

    for (const word of words) {
        const wordToPattern = new Map()
        const patternToWord = new Map()
        let isMatch = true

        for (let i = 0; i < word.length; i++) {

            if (wordToPattern.has(word[i])) {
                if (wordToPattern.get(word[i]) !== pattern[i]) {
                    isMatch = false
                    break
                }
            } else wordToPattern.set(word[i], pattern[i]);

            if (patternToWord.has(pattern[i])) {
                if (patternToWord.get(pattern[i]) !== word[i]) {
                    isMatch = false
                    break
                }
            } else patternToWord.set(pattern[i], word[i])
        }

        if (isMatch) {
            result.push(word)
        }
    }

    return result

};