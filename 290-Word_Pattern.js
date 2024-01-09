/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    str_vector = s.split(' ')

    if (pattern.length !== str_vector.length) return false;
    if (new Set(pattern).size !== new Set(str_vector).size) return false;

    let map = new Map()
    for (let i = 0; i < pattern.length; i++) {
        if (!map.has(pattern[i])) {
            map.set(pattern[i], str_vector[i])
        }

        if (str_vector[i] !== map.get(pattern[i])) return false;
    }
    return true
};
