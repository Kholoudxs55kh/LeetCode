/**
 * @param {string} s
 * @return {string}
 */
const getSmallestString = (s) => {
    /**
    Idea:
        - so we will swap at most once so we can get the possible smallest number we can get.
    
    Edge Cases: NAN
        
    Approach: 
            1- iterate over string
            2- check parity of two adjacent number
            3- if true then swap if the first number is bigger than the second one then break
            4- else repeat for the next adjacent numbers
            5- print the output
    */
  const digits = [...s];
  for (let i = 1; i < digits.length; i++) {
    if (digits[i - 1] > digits[i] && (digits[i - 1] % 2 === digits[i] % 2)) {
      [digits[i - 1], digits[i]] = [digits[i], digits[i - 1]];
      break; 
    }
  }
  return digits.join('');
};

