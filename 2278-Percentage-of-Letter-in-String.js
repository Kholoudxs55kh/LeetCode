/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    /**
    - Idea:

    - Edge Cases:

    - Approach:
     */

     let counter = 0

     for (let i = 0; i < s.length; i++) {
        if (s[i] === letter) counter++
     }

     return Math.floor((counter / s.length) * 100)
};