/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return \t     -1 if num is higher than the picked number
 *\t\t\t      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 1;
    while (start <= n) {

        let mid = Math.floor((start + n ) / 2);
        let guessed = guess(mid);
        
        if (guessed == 0) return mid;

        else if (guessed == 1) start = mid + 1;
        
        else if (guessed == -1) n = mid - 1;
    }
};