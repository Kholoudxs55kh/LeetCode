/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    /**
     Idea:
         - if a char starts with a vowl => add ma to the end with a * position
         - if !starting with a vowl, move the first letter to the last with ma to the end with a * position
 
     Edge Cases:
         - if length == 1 , add maa to the end
 
     Approach:
         - to split the sentence 
         - loop over it 
         - check if it starts with a vowl
             - if? add ma to the end with positions a
             - not? move the first letter to the end and add ma to the end with positions a
         - join the splitted sentence and return it
     */

    if (sentence.length == 1) return sentence = + "maa"
    
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (vowels.has(words[i][0])) {
            words[i] += "ma" + "a".repeat(i + 1);
        } else {
            words[i] = words[i].slice(1) + words[i][0] + "ma" + "a".repeat(i + 1);
        }
    }

    return words.join(' ');
};
