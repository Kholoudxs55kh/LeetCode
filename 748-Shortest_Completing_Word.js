/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    const licenseLetters = []
    let res = ""
    for (let char of licensePlate.toLowerCase()) {
        if (char >= 'a' && char <= 'z') licenseLetters.push(char);
    }


    for (let word of words) {
        let temp = [...licenseLetters]
        for (let char of word) {
            const index = temp.indexOf(char)
            if (index !== -1) temp.splice(index, 1)
        }

        if (temp.length === 0) {
            if (res === "" || word.length < res.length) res = word
        }
    }

    return res
};
