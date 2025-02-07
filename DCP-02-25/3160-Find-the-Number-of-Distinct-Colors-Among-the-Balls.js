/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
    const map = new Map()
    const comparedMap = new Map()
    const res = []
    for (let i of queries) {
        if (map.has(i[0])) {
            let ele = map.get(i[0])
            comparedMap.set(ele, comparedMap.get(ele) - 1)
            if (comparedMap.get(ele) === 0) {
                comparedMap.delete(ele)
            }
        }
        map.set(i[0], i[1])
        comparedMap.set(i[1], (comparedMap.get(i[1]) || 0) + 1)

        res.push(comparedMap.size)

    }
    return res
};