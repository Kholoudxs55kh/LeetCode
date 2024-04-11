/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (num.length == k) return '0';
    
    const result = [];
    for (let i = 0; i < num.length; i++) {
        while (k > 0 && result.length > 0 && result[result.length - 1] > num[i]) {
            result.pop();
            k--;
        }
        
        if (result.length == 0 && num[i] == '0') continue;
        result.push(num[i]);
    }

    while (k > 0 && result.length > 0) {
        k--;
        result.pop();
    }

    return result.length == 0 ? '0' : result.join('');
};