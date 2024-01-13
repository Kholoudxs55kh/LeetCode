/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    var matching = 0
    for (let i = 0 ; i < t.length ; i++) {
      if ( t.includes(s[i]) ) {
            matching++;
            t = t.replace(s[i],"1");
      }
    }
    
    return t.length - matching
};
