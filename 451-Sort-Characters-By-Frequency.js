/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let dict_ = {}
    let max = 1
    for (let i of s) {
        dict_[i] = (dict_[i] || 0) + 1
        // console.log(dict_)
        max = Math.max(max, dict_[i]) 
    }
    
    // console.log(dict_)

    let output = Array(max + 1).fill('')
    
    // console.log(output)
    
    for (let j of Object.keys(dict_)) {
        output[output.length - dict_[j]] = output[output.length - dict_[j]] + j.repeat(dict_[j])
    }

    // console.log(output)
    return output.join('')
};