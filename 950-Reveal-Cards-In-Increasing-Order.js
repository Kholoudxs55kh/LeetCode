/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => b - a); 
    const res = [];
    const queue = [...deck];

    while (queue.length) {
        if (res.length > 1) res.unshift(res.pop()); 
        res.unshift(queue.shift()); 
    }
    return res;
};