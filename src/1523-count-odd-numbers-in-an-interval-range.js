/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

var countOdds = function (low, high) {
  if (low % 2 === 0) low++;
  if (high % 2 === 0) high--;

  return Math.ceil((high - low + 1) / 2);
};

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

var countOdds = function (low, high) {
  function isOdd(num) {
    if (num % 2 === 0) return false;
    return true;
  }
  let L = high - low + 1;
  if (!isOdd(L)) {
    return L / 2;
  } else {
    if (isOdd(low)) {
      return Math.ceil(L / 2);
    } else {
      return Math.floor(L / 2);
    }
  }
};

// var countOdds = function (low, high) {
//     function isOdd(num) {
//         if (num % 2 === 0) return false
//         return true
//     }

//     let L = high - low + 1
//     if (isOdd(high) && isOdd(low)) {
//         return Math.ceil(L / 2)
//     } else if (!isOdd(high) && !isOdd(low)) {
//         return Math.floor(L / 2)
//     } else if (isOdd(high) && !isOdd(low) || isOdd(high) && !isOdd(low)) {
//         return L / 2
//     }

//     return L / 2
// };
