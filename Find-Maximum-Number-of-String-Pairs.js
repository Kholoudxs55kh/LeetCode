/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    /**
    - Idea
        return the number of pairs in the array
        those pairs based on => every string with its reversed

    - Edge Cases
        array containg one element

    - Aprroach
        iterate with each element over the other elements
        check if any of the elements equel to the reversed version of the element 
        if so incress counter 
        else continue iteration till the end of array 
        return counter
    */
    let set = new Set()

    for (word of words) {
        set.add(word.split('').sort().join(''))
    }

    return (words.length - set.size)
};