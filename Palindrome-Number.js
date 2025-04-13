/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x !== parseInt(x.toString().split('').reverse().join(''))) return false

    return true
};