/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  if (cost.length === 1) return cost[0];
  cost.sort((a, b) => b - a);
  let total = 0;

  for (let i = 0; i <= cost.length - 1; i++) {
    total += cost[i];
    if (i + 1 < cost.length) total += cost[i + 1];
    i += 2;
  }
  return total;
};
