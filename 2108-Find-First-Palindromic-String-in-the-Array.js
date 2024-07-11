/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (word of words) {
        // console.log(Array.from(word))
        // console.log(Array.from(word).reverse())
        if (word ===  word.split('').reverse().join('')) return word
    }

    return ""
};
