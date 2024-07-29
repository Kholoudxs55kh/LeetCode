/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const stRow = new Set('qwertyuiop');
    const ndRow = new Set('asdfghjkl');
    const rdRow = new Set('zxcvbnm');
    
    const res = [];

    for (let word of words) {
        const lowerWord = word.toLowerCase();
        const firstChar = lowerWord[0];
        
        let targetRow;
        if (stRow.has(firstChar)) targetRow = stRow;
        else if (ndRow.has(firstChar)) targetRow = ndRow;
        else targetRow = rdRow;
        
        let canBeTyped = true;
        for (let char of lowerWord) {
            if (!targetRow.has(char)) {
                canBeTyped = false;
                break;
            }
        }
        if (canBeTyped) res.push(word);
    }

    return res;
};