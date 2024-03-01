/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const sorted = s.split("").sort().reverse();

    if (sorted[0] === "1") {
        const modified = sorted.slice(1).concat("1");    
        return modified.join(""); 
    }

    else return sorted.join("");
};