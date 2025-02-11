/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let arr = [];
    for (let char of s) {
        if (char >= '0' && char <= '9' && arr.length > 0) arr.pop()
        else arr.push(char)
    }
    return arr.join('');
};