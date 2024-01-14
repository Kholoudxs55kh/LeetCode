/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;

    const w1Set = new Set(word1);
    const w2Set = new Set();
    const w1 = Array.from(word1);
    let count = 0;

    for (let i = 0; i < w1.length; i++) {
        
        if (word2.includes(w1[i])) {
            count++;
            w2Set.add(w1[i]);
        }
    }
    
    console.log(w2Set)
    console.log(w1Set)

    if (count === word1.length && w1Set.size === w2Set.size) return true;

    return false;
};

const word1 = "abbzzca";
const word2 = "babzzcz";
console.log(closeStrings(word1, word2)); // Output: false
