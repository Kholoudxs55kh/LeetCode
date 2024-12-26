/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    /**
    - the anagram is to have 2 words containing the same chars \count and char\
    
    - edge case: check their length is !== return false
    - edge case: check the string if it has a non-char
    
    - how to solve it
        - https://discord.com/channels/1319972809950232606/1321923765612838922/1321941535926784020
     */

    if (s.length !== t.length) return false

    let hash = {}

    for (let i = 0; i < s.length; i++) {
        hash[s[i]] ? hash[s[i]] += 1 : hash[s[i]] = 1
        hash[t[i]] ? hash[t[i]] -= 1 : hash[t[i]] = -1;
    }
    
    for (let key in hash) {
        if (hash[key] !== 0) return false;
    }
    return true;
};