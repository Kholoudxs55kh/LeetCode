/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
    /**
    Idea: 
        -- s is a parentheses set, we have to make sure that if any value of s matches the 0 value of locked can be changed to the oppening or closing parentheses to make a matching one, or if they're already mached

    Edge case:
        -- length == 1 or the "s.length === 2 && locked !== "11" && s !== "((" && s!== "))"" this

    Approach:
        -- Initialise a map containing two keys "(" & ")", 
        count them as long as their indexes don't meet 1 in locked
        if both are odd or even return true
        else return false
        
        ```
        if (s.length === 1) return false
        if (s.length === 2) {
            if (locked === "11") return s === "()";
            else return true;
        }

        let map = { "(": 0, ")": 0 }

        for (let i = 0; i < s.length; i++) {
            if (locked[i] !== "1") {
                map[s[i]] += 1
            }
        }
        
        return map[")"] % 2 === map["("] % 2
        ```
        
        ABOVE IS NOT COMPLETE APPROACH => failed at 143 / 258 test


        IMPROVED:

        initialise vars to keep tracking both parenthese to check the open or close and the acceptable to be modified
     */
    if (s.length === 1 || s.length % 2 !== 0) return false
    if (s.length === 2) {
        if (locked === "11") return s === "()";
        else return true;
    }
    if (locked.length % 2 !== 0) return false

    let open = 0, acceptable = 0

    for (let i = 0; i < s.length; i++) {
        if (locked[i] === "1") open += s[i] === "(" ? 1 : -1
        else acceptable++

        if (open + acceptable < 0) return false
    }

    open = 0
    acceptable = 0

    for (let i = s.length - 1; i >= 0; i--) {
        if (locked[i] === "1") open += s[i] === ")" ? 1 : -1
        else acceptable++

        if (open + acceptable < 0) return false
    }

    return true
};