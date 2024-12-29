/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    /**
    - Idea:
        - to reverse the odds k subStrings
        - if a substring is < k leave it as it is


    Edge Cases:
        - k == 0 || empty string
        - if k = 1 return s
        - if k > len reverse all

    Approach:

        /* kholoud's brute force
        - arr of ss 
        - reverse evens
        - join
        /

        - reverse func => args : s, lPtr, rPtr
        - for ( ; ; i + 2k)
        - if rest > 1 && < k => reverse
        - { reverse(s, i, i+k) }
     */



    function reverse(st) {
        let returnedStr = \\

        for (let i = st.length - 1; i >= 0; i--) returnedStr += st[i]

        return returnedStr
    }

    // let arrStr = []
    //  for (let i = 0 ; i < s.length; i += k) {
    //     // console.log(s.substring(i, i + k))
    //     arrStr.push(s.substring(i, i + k))
    //  }


    // for (let i = 0; i < arrStr.length; i++) {
    //     if (i % 2 === 0) arrStr[i] = reverse(arrStr[i]);
    // }
    //  console.log(arrStr)
    // //  console.log(reverse(s))

    // return arrStr.join(\\)



    // Optimized

    let res = \\

    for (let i = 0; i < s.length; i += 2 * k) {
        const evenK = s.substring(i, i + k)
        const oddK = s.substring(i + k, i + 2 * k)
        res += reverse(evenK) + oddK
    }
    return res
};