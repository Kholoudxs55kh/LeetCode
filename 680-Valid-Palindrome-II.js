/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let start = 0
    let end = s.length-1;

    while(start < end ){
        if(s[end] !== s[start]){
            let leftStr = s.substring(start + 1, end + 1)
            let rightStr = s.substring(start, end)

            if (leftStr === leftStr.split(\\).reverse().join(\\)
            || rightStr === rightStr.split(\\).reverse().join(\\)) return true
            
            else return false
        }
        end--;
        start++
    }
    return true
};