/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // pass first case
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
};
