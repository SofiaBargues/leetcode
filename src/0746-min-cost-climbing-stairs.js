function minCost(cost) {
  let totalCost = [];
  for (let i = 0; i <= cost.length - 1; i++) {
    // para cada costo si === 1 o 0
    if (i === 0 || i === 1) {
      //su valor cost[i]
      totalCost.push(cost[i]);
    } else {
      //su valor va a ser el menor ente el (cost[i]+cost[i-1], cost[i]+cost[i-2])
      totalCost.push(
        Math.min(cost[i] + totalCost[i - 1], cost[i] + totalCost[i - 2])
      );
    }
  }
  let l = totalCost.length;

  console.log(totalCost[l - 1], totalCost[l - 2]);
  console.log(totalCost);

  return Math.min(totalCost[l - 1], totalCost[l - 2]);
}

console.log(minCost([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
