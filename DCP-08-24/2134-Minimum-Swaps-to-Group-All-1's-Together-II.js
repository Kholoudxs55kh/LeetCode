/**
 * @param {number[]} nums
 * @return {number}
 */
const minSwaps = function(nums) {
    const totalOnes = nums.reduce((sum, num) => sum + num, 0);
    
    if (totalOnes === 0 || totalOnes === nums.length) return 0;
    
    let currentOnesInWindow = nums.slice(0, totalOnes).reduce((sum, num) => sum + num, 0);
    let maxOnesInWindow = currentOnesInWindow;
    
    for (let i = 0; i < nums.length; i++) {
        currentOnesInWindow -= nums[i];
        currentOnesInWindow += nums[(i + totalOnes) % nums.length];
        maxOnesInWindow = Math.max(maxOnesInWindow, currentOnesInWindow);
    }
    
    return totalOnes - maxOnesInWindow;
};