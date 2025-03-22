/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let subStr = word.slice(0, word.indexOf(ch) + 1)
    subStr = Array.from(subStr).reverse().join("")
    // console.log(subStr)
    return subStr + word.slice(word.indexOf(ch) + 1)
};