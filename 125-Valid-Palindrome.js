/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    console.log(s);
    for (let start = 0, end = s.length - 1; start < end; ) {
        const codeStart = s.charCodeAt(start);
        const codeEnd = s.charCodeAt(end);

        console.log(codeStart, codeEnd);

        if (!(codeStart > 47 && codeStart < 58) &&
            !(codeStart > 64 && codeStart < 91) &&
            !(codeStart > 96 && codeStart < 123)) {
            start++;
            continue;
        }

        if (!(codeEnd > 47 && codeEnd < 58) &&
            !(codeEnd > 64 && codeEnd < 91) &&
            !(codeEnd > 96 && codeEnd < 123)) {
            end--;
            continue;
        }

        if (s[start] !== s[end]) return false;

        start++;
        end--;
    }

    return true;
};

// console.log(isPalindrome(\A man, a plan, a canal: Panama\));
