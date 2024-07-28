/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let cities = new Set();

    for (let p of paths) cities.add(p[0])

    for (let p of paths) {
        let final = p[1]

        if (!cities.has(final)) return final
    }

    return []
};