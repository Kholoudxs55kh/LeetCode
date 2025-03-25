/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);
    let sorted = [];

    for (let i = 0; i < meetings.length; i++) {
        let cur = meetings[i];
        while (i < meetings.length - 1 && cur[1] >= meetings[i + 1][0]) {
            cur[0] = Math.min(meetings[i + 1][0], cur[0])
            cur[1] = Math.max(meetings[i + 1][1], cur[1])
            i++
        }
        sorted.push(cur)
    }

    let res = (sorted[0][0] - 1) + (days - sorted.at(-1)[1])

    for (let i = 0; i < sorted.length - 1; i++) {
        let cur = sorted[i]
        let next = sorted[i + 1]
        res += next[0] - cur[1] - 1
    }

    return res
};