/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if (s.length < 10) return [];
    
    let res = [];
    let set = new Set();
    let repeatedSet = new Set();
    
    for (let i = 0; i <= s.length - 10; i++) {
        const subStr = s.substring(i, i + 10);
        
        if (set.has(subStr)) repeatedSet.add(subStr);
        else set.add(subStr);
        
    }
    
    return Array.from(repeatedSet);
    
};