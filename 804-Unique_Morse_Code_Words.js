/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCodeMap = {
        'a': ".-",
        'b': "-...",
        'c': "-.-.",
        'd': "-..",
        'e': ".",
        'f': "..-.",
        'g': "--.",
        'h': "....",
        'i': "..",
        'j': ".---",
        'k': "-.-",
        'l': ".-..",
        'm': "--",
        'n': "-.",
        'o': "---",
        'p': ".--.",
        'q': "--.-",
        'r': ".-.",
        's': "...",
        't': "-",
        'u': "..-",
        'v': "...-",
        'w': ".--",
        'x': "-..-",
        'y': "-.--",
        'z': "--.."
    };

    // let count = 0
    // let map = {}
    // let str = ""
    // for (word of words) {
    //     // console.log(word)
    //     for (let i = 0; i < word.length; i++) {
    //         // console.log(word[i])
    //         str += morseCodeMap[word[i]]
    //         console.log(str)
    //     }

    //     map[str.length] = map[str.length] ? map[str.length++] : 1
    //     str = ""
    // }

    // return Object.values(map).reduce((a, c) => a + c, 0)

    let uniqueTransformations = new Set();
    let str = "";
    for (let word of words) {
        for (let i = 0; i < word.length; i++) {
            str += morseCodeMap[word[i]];
        }

        uniqueTransformations.add(str);
        str = "";
    }

    return uniqueTransformations.size;
};


// Runtime 49ms Beats 89.38%
