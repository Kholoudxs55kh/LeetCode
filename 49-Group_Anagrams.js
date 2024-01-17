/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let output = {};

  for (let st of strs) {
    let sorted_str = Array.from(st).sort().join("");
    if (output[sorted_str]) output[sorted_str].push(st);
    else output[sorted_str] = [st];
  }

  return Object.values(output);
};
