/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    /**
    Idea:
        -- return the first palindrome to meet or ""

    Edge Cases:
        -- N/A

    Approach:
        -- loop over the array, check every string and return the first to meet as palindrome
    */

    // for (let word of words) {
    //     if (word === word.split('').reverse().join('')) return word
    // }

    for (let word of words) {
        let isPal = true;

        for (let i = 0, j = word.length - 1; i < word.length, j >= 0; i++, j--) {
            if (word[i] !== word[j]) {
                isPal = false
                break
            }
        }

        if (isPal) return word
    }

    return ""
};