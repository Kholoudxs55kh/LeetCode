/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let map = new Map()
    let prefix = ''
    let suffix = ''

    for (let i = 0; i < s.length; i++) {
        if (order.indexOf(s[i]) >= 0) {
            if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1)
            else map.set(s[i], 1)
        } else prefix += s[i]
        
    }

    for (let j = 0; j < order.length; j++) {
        suffix += order[j].repeat(map.get(order[j]))
    }

    return prefix + suffix
};