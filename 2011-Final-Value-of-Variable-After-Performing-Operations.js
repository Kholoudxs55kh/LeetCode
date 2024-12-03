/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let count = 0

    for (let sym of operations) {
        (sym === "++X" || sym === "X++") ? count++ : count--
    }
    return count
};