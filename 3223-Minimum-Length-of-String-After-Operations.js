/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    /**
    Idea: 
        -- return k (number) the most frequent elements
    
    Edge Cases: 
        -- N/A
    
    Approach:
        --  frequency array
            max(element)
            pop(max(element))
            repeat last 2 steps k times
     */
    let res = s.length;
    let right = new Map();
    let left = new Map();

    for (char of s) {
        left.set(char, 0);
        right.set(char, (right.get(char) || 0) + 1);
    }

    for (char of s) {
        right.set(char, right.get(char) - 1);

        if (left.get(char) > 0 && right.get(char) > 0) {
            left.set(char, left.get(char) - 1);
            right.set(char, right.get(char) - 1);
            res -= 2;
        }

        left.set(char, left.get(char) + 1);
    }

    return res;
};