/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
  let result = 1;
  for (let i = 0; i <= word.length - 2; i++) {
    let first = word[i];
    let secon = word[i + 1];
    if (first === secon) {
      result++;
    }
  }
  return result;
};
