/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
  let charCounts = new Array(128).fill(0); 
  let maxLen = 0;

  for (let ch of s) {
    let ascii = ch.charCodeAt(0);
    let maxCount = 0;

    for (let i = Math.max(0, ascii - k); i <= Math.min(127, ascii + k); i++) {
      maxCount = Math.max(maxCount, charCounts[i]);
    }

    charCounts[ascii] = maxCount + 1;
    maxLen = Math.max(maxLen, charCounts[ascii]);
  }

  return maxLen;
};
