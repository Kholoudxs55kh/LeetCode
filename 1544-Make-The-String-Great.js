/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let str = ['']
    for(let char of s){
        let pop =str[str.length - 1]
        if (char !== pop && char.toLowerCase() == pop.toLowerCase()) str.pop()
        else str.push(char)
    }
    return str.join('')
};