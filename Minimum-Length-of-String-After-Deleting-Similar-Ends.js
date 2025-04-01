/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if(s[left] === s[right]) {
            let nextLeft = left + 1;
            while(nextLeft < right && s[left] === s[nextLeft]) {
                nextLeft++;
            }
            left = nextLeft;
            let nextRight = right - 1;
            while(nextRight > left && s[right] === s[nextRight]) {
                nextRight--;
            }
            right = nextRight;
        } else {
            break;
        }
    }
    return right - left + 1;
};