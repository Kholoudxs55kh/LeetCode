/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
    let arr, temp
    for (let word of words) {
        let str = ''

        for (let i = 1; i < word.length; i++) str += (word.charCodeAt(i) - 97) - (word.charCodeAt(i - 1) - 97) + ','
        if (arr && temp) return arr[0] === str ? temp[1] : arr[1]

        if (!arr || arr[0] === str) arr = [str, word]
        
        else temp = [str, word]
    }

    return words[words.length - 1]
};