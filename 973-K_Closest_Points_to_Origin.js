/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let map = {}
    let res = []

    for (let point of points) {
        let dist = (point[0] ** 2) + (point[1] ** 2)
        
        map[points.indexOf(point)] = dist
    }
    // console.log(map)

    let sortedKeys = Object.keys(map).sort((a, b )=> map[b] - map[a]).reverse();

    let output = sortedKeys.splice(0,k) 

    // console.log(sortedKeys)
    // console.log(output)

    output.map(n => {
        res.push(points[Number(n)])
    })

    // console.log(res)

    return res
};
