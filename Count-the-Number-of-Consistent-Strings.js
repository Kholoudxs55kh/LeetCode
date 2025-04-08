/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    /**
    idea: return the number of the strings that contains only the allowed chars
        start the counter with the words length
        convert the allowed to a set of characters and iterate over words if the word have not allowed character counter--
    */
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