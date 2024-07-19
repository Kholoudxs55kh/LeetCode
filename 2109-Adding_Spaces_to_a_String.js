/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let str = ""
    let space = 0

    for (let i = 0; i < s.length; i++) {
        if (space < spaces.length && i === spaces[space]) {
            str += " "
            space++
        }
        str += s[i]
    }

    return str
};
