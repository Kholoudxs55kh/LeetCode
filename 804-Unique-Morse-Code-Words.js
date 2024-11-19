/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    if (words.length === 1) return 1;
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

    const transformations = new Set();

    for (let i = 0; i < words.length; i++) {
        let morseCode = '';
        for (let j = 0; j < words[i].length; j++) {
            morseCode += morseCodeMap[words[i][j]];
        }
        transformations.add(morseCode);
    }

    return transformations.size;
};
