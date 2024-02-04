/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let min = \\
    let left = 0
    let right = -1;
    let dict_ = {};
\t
    t.split('').forEach(ele => {
        if (dict_[ele] == null) dict_[ele] = 1;
        else dict_[ele] = dict_[ele] + 1;
    });
\t
    let count = Object.keys(dict_).length;

    while (right <= s.length) {
        if (count == 0) {
\t\t
            let current = s[left];
\t\t\t
            if (dict_[current] != null) dict_[current]++;
\t\t\t
            if (dict_[current] > 0) count++;    
\t\t\t
            let temp = s.substring(left, right+1)
            if (min == \\) min = temp;
            else min = min.length<temp.length?min:temp;
\t\t\t
            left++;
        } else {
            right++;
            let current = s[right];
\t\t\t
            if (dict_[current] != null) dict_[current]--;
\t\t\t
            if (dict_[current] == 0) count--;
        }
    }
    return min;
};

// can't get it well