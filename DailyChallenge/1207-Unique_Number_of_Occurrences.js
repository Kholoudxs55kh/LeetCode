/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map();

  for (let val of arr) {
    map.set(val, map.get(val) + 1 || 1);
  }
  let set = new Set(map.values());

  return map.size === set.size;
};
