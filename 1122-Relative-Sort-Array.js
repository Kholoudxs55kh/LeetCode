/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let newArr = [...arr2]
    arr1.sort((a, b) => a - b)
    
    for (let i = 0; i < arr1.length; i++) {
        if (newArr.indexOf(arr1[i]) == -1) newArr.push(arr1[i])
        else newArr.splice(newArr.indexOf(arr1[i]), 0, arr1[i])
    }

    for (let i = 0; i < arr2.length; i++) newArr.splice(newArr.indexOf(arr2[i]), 1)

    return newArr;
};