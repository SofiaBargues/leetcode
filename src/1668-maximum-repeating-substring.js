/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let maxK = 0
  let k = 0
  for (let i = 0; i <= sequence.length - word.length; i++) {
      let currSubStr = sequence.slice(i, i + word.length)
      if (currSubStr === word) {
          k++
          i += word.length - 1
          if (k > maxK) maxK = k
      } else {
          if (k > 0) { i -= word.length - 1 }
          k = 0

      }
  }
  return maxK

};