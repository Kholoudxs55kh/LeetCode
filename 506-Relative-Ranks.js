const MAP = {
    \1\: \Gold Medal\,
    \2\: \Silver Medal\,
    \3\: \Bronze Medal\,
}

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const hashmap = {};
    const sortScore = [...score].sort((a, b) => b - a);
    let output = [];
    
    for (let i = 0; i < sortScore.length; i++) {
        hashmap[sortScore[i]] = MAP[`${i + 1}`] || `${i + 1}`;
    }
    
     for (let i = 0; i < score.length; i++) {
        output.push(hashmap[score[i]]);
    }
    
    return output;
};