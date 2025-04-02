/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  totalAlice = aliceSizes.reduce((a, b) => a + b, 0);
  totalBob = bobSizes.reduce((a, b) => a + b, 0);
  set = new Set(aliceSizes);
  for (const size of bobSizes) {
    if (set.has((totalAlice - totalBob) / 2 + size))
      return [(totalAlice - totalBob) / 2 + size, size];
  }
};
