/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  let pilesSorted = piles.sort((a, b) => a - b);
  let acc = 0;
  for (let i = piles.length / 3; i <= piles.length - 1; i += 2) {
    acc += pilesSorted[i];
  }
  return acc;
};
