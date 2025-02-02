/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function (creators, ids, views) {
    /**
    Idea:
        -- return an array of arrays that contain the creator name and its most views id based on the views count

    Edge Cases:
        -- N/A

    Approach:
        -- sum all the views of all the same creator using map
           key string, value list => [sum , idx]

           seperated loop  to get the res 
    */

    let firstMap = new Map()
    let sum = 0
    let res = []

    for (let i = 0; i < creators.length; i++) {
        if (!firstMap.has(creators[i])) firstMap.set(creators[i], { sumed: 0, idx: i })

        const creator = firstMap.get(creators[i])
        creator.sumed += views[i]

        const currMaxView = views[creator.idx]
        if (views[i] > currMaxView ||
            (views[i] === currMaxView && ids[i] < ids[creator.idx])) {
            creator.idx = i
        }

        if (creator.sumed > sum) sum = creator.sumed

    }

    for (const [creator, data] of firstMap.entries()) if (data.sumed === sum) res.push([creator, ids[data.idx]])


    return res
};