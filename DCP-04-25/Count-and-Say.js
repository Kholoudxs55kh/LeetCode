/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function(n) {
    if (n === 1) return '1'

    let str = countAndSay(n - 1)

    let genStr = ''

    let left = 0
    let right = 0

    while (right < str.length) {
        if (str[left] === str[right]) right++
        else {
            genStr += `${right - left}${str[left]}`
            left = right
        }
    }

    if (right !== left) genStr += `${right - left}${str[left]}`
    

    return genStr
};