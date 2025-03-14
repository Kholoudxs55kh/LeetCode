function maximumCandies(candies: number[], k: number): number {
    let left = 1, right = Math.max(...candies) + 1;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (candies.reduce((ac, val) => ac + Math.floor(val / mid), 0) >= k) left = mid + 1;
        else right = mid;
    }
    return left - 1
};