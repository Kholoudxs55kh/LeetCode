/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let start = 0;
    let end = 0;
    let res = 0;
    while(end < prices.length) {
        end++;
        if (prices[start] < prices[end]) {
            res = Math.max(res, prices[end] - prices[start]);
        } else start = end;
    }
    return res;
};