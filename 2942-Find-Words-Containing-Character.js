/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let output = []

    for (let word in words) {
        if (words[word].includes(x)) output.push(parseInt(word))
    }

    return output
};