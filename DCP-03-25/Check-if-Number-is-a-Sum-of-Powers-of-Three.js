/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    while (n > 1) {
        if (n % 3 == 1) n--

        if (n % 3 == 0) n = n / 3

        else return false

    }
    return true
};