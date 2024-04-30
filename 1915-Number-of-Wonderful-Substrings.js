/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
    let count = 0;
    let seen = new Array(1024).fill(0);
    let mask = 0;
    
    seen[0] = 1;
    for (let i = 0; i < word.length; i++) {
        let index = word.charCodeAt(i) - 'a'.charCodeAt(0); 
        mask ^= (1 << index);
        count += seen[mask];
        
        for (let j = 0; j < 10; j++) {
            count += seen[mask ^ (1 << j)];
        }
        seen[mask]++;
    }
    
    return count;
};