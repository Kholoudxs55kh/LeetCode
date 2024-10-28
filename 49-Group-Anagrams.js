/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let groupedAnagrams = {};

  for (let str of strs) {
    let sorted_str = Array.from(str).sort().join("");
    if (groupedAnagrams[sorted_str]) groupedAnagrams[sorted_str].push(str);
    else groupedAnagrams[sorted_str] = [str];
  }

  return Object.values(groupedAnagrams);
};