/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
    /**
    Idea: 
        -- To check if you can make a K palindrome of S 

    Edge cases: 
        -- if s.size == k return True
    
    Approach:
        --  count of (letters freq odd numbers)<=k
            create hash table to count c in s
            a:2 n:2 b:1 e:2 l:2 z:1 c:1

            l:1 e:3 t:1 c:1 o:1 d:1

            s = "annabelle", k = 2
            s 9
            anna 4
            elble 5

            anellena 8
            b 1
     */

    if (s.length === k) return true
    if (k > s.length) return false

    let map = new Map()
    let count = 0

    for (let char of s) {
        map[char] = (map[char] || 0) + 1
        if (map[char] % 2 !== 0) count++
        else count--
    }

    // if (count <= k) return true

    return count <= k

};