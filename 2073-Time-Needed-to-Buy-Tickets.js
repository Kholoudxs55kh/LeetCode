/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let time = 0, i = 0
    while (tickets[k] !== 0) {
        if (tickets[i] > 0) {
            time++
            tickets[i]--
            if (tickets[k] == 0) return time
        }
        if (i == tickets.length - 1) i = 0
        else i++
    }

};