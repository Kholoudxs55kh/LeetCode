/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    /**
    - Idea: 
        - punch of diff times, return the most two near times
    
    - Egde Cases:
        - if a time repeated, return 0

    - Approach:
        - convert the time to mnts
        - store and sort the mnts
        - handle the \00:00\ corectly to cover all
        - itterate over the sorted arr and diff every two values
        - follow up the minimum val and update it
        - return the min val
     */


    const set = new Set(timePoints)
    if (set.size !== timePoints.length) return 0

    // let arrOfTimes = []

    // for (let i = 0; i < timePoints.length; i++) {
    //     // if (timePoints[i] === \00:00\) {
    //     //     arrOfTimes.push(24 * 60)
    //     // }

    //     let vals = timePoints[i].split(\:\)
    //     let mnts = (parseInt(vals[0]) * 60) + parseInt(vals[1])

    //     arrOfTimes.push(mnts)
    // }

    // arrOfTimes.sort((a, b) => a - b)
    // console.log(arrOfTimes)

    // let minDiff = Infinity

    // for (let i = 0; i < arrOfTimes.length - 1; i++) {
    //     console.log(i)
    //     let diff = arrOfTimes[i + 1] - arrOfTimes[i]

    //     console.log(diff)
    //     if (minDiff > diff) minDiff = diff
    // }

    // let circularDiff = (1440 - arrOfTimes[arrOfTimes.length - 1]) + arrOfTimes[0]

    // minDiff = Math.min(minDiff, circularDiff)
    // return minDiff


    // ======== Optimized using gpt ========
    const minutes = timePoints.map(time => {
        const [hours, mins] = time.split(\:\).map(Number);
        return hours * 60 + mins;
    }).sort((a, b) => a - b);

    let minDiff = Infinity;

    for (let i = 1; i < minutes.length; i++) {
        minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
    }

    const circularDiff = 1440 - minutes[minutes.length - 1] + minutes[0];
    minDiff = Math.min(minDiff, circularDiff);

    return minDiff;
};