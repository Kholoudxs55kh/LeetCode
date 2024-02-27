/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const output = [];
    let stack = [];
    
    for (let i = 0; i <= pattern.length; i++) {
        stack.push(i + 1);
        if (pattern[i] === 'I' || i === pattern.length) {
            output.push(...stack.reverse());
            stack = [];
        }
    }
    
    return output.join('');
};