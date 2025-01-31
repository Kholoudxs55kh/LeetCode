/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
    let res = Infinity
    let map = new Map()
    let targetMap = new Map()

    for (let i = 0; i < target.length; i++) {
        if (targetMap.has(target[i])) targetMap.set(target[i], targetMap.get(target[i]) + 1)
        else targetMap.set(target[i], 1)
    }

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1)
        else map.set(s[i], 1)
    }

    for (const [key, Value] of targetMap) {
        if (map.has(key)) {
            const val = map.get(key)
            const filnalVal = Math.floor(val / Value)

            if (filnalVal <= 0) return 0
            res = Math.min(res, filnalVal)
        }
        else return 0
    }
    return res
};