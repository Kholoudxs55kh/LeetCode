/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let lines = 1, currWidth = 0;

    for (let i = 0; i < s.length; i++) {
        const charWidth = widths[s.charCodeAt(i) - 97];

        if (currWidth + charWidth > 100) {
            lines++;
            currWidth = charWidth;
        } else currWidth += charWidth;

    }

    return [lines, currWidth];
};