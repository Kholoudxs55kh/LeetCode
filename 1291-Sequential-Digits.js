/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
      const arr = [];

        for (let i = 1; i <= 9; ++i) {
            let num = i;
            let next = i + 1;

            while (num <= high && next <= 9) {
                num = num * 10 + next;
                if (low <= num && num <= high) {
                    arr.push(num);
                }
                ++next;
            }
        }
        arr.sort((a, b) => a - b);
        
        
        return arr;
};
