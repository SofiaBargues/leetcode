/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
  let aples = apple.reduce((acc, curr) => acc + curr, 0);

  let sortedBoxes = capacity.sort((a, b) => a - b);
  // console.log(aples, sortedBoxes)
  // console.log(sortedBoxes.pop())
  // console.log(sortedBoxes)

  let totalBoxes = 0;
  while (aples > 0) {
    let bigBox = sortedBoxes.pop();
    aples = aples - bigBox;
    totalBoxes++;
  }
  return totalBoxes;
};
