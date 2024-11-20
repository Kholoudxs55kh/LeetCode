/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0
    let allowedLetters = Array.from(allowed)
    for (let i = 0; i < words.length; i++) {
        let flag = true

        for (letter of words[i]) {
            if (!allowedLetters.includes(letter)) {
                flag = false
                break
            }
        }
        if (flag) count++
    }

    return count
};