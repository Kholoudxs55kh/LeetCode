/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;

    let maxArea = 0;
    while (start < end) {
        let water = (end - start) * Math.min(height[start], height[end]);
        maxArea = Math.max(maxArea, water);
        
        if (height[start] < height[end]) start++;
        else end--;
    }
    
    return maxArea;
};