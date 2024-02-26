/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const arr_ = [];
    for (let i = 0; i < position.length; i++) arr_.push(i); 

    let result = 1;

    arr_.sort((a,b) => position[b] - position[a]);
    let cur = arr_[0];

    for (let i = 1; i < position.length; i++) {
        let idx = arr_[i];
        if ((target - position[idx]) * speed[cur] > (target - position[cur]) * speed[idx]) {
            result++;
            cur = idx;
        }
    }

    return result;
};