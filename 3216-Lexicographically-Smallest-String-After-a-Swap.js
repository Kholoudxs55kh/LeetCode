/**
 * @param {string} s
 * @return {string}
 */
const getSmallestString = (s) => {
  const digits = [...s];
  for (let i = 1; i < digits.length; i++) {
    if (digits[i - 1] > digits[i] && (digits[i - 1] % 2 === digits[i] % 2)) {
      [digits[i - 1], digits[i]] = [digits[i], digits[i - 1]];
      break; 
    }
  }
  return digits.join('');
};

