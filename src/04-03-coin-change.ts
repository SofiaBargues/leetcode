// DP + recursion
function coinChange(coins: number[], amount: number): number {
  const memo: number[] = Array(amount + 1).fill(-1); // Initialize with not in memo value
  // memo can also be a record of target and count

  memo[0] = 0;

  function minChange(target: number) {
    // 11
    if (target < 0) {
      return Infinity;
    }
    if (memo[target] != -1) {
      return memo[target];
    }

    memo[target] =
      Math.min(...coins.map((coin) => minChange(target - coin))) + 1;
    return memo[target];
  }

  const result = minChange(amount);
  return result <= amount ? result : -1;
}

// DP with iterative approach
function coinChangeDP(coins: number[], amount: number): number {
  const minCoins = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);

  minCoins[0] = 0;

  for (let i = 1; i < minCoins.length; i++) {
    // Find the min combo for each subproblem
    for (let coin of coins) {
      const prev = minCoins[i - coin];
      if (prev !== undefined && prev < amount) {
        minCoins[i] = Math.min(minCoins[i], prev + 1);
      }
    }
  }

  return minCoins[amount] <= amount ? minCoins[amount] : -1;
}

function coinChangeBFS(coins: number[], amount: number): number {
  let queue: number[] = [];
  // coins.sort((a,b) => b-a) //low to high
  // console.log(coins)
  if (amount == 0) {
    return 0;
  }

  if (coins.findIndex((el) => el == amount) != -1) {
    return 1;
  }

  let coinsUsed = 1;
  queue.push(...coins);
  while (queue.length) {
    // Level iteration
    const newCombinations = new Set<number>();
    for (let prev of queue) {
      for (let coin of coins) {
        const curr = prev + coin;
        if (curr == amount) {
          return coinsUsed + 1;
        }
        if (curr < amount) {
          newCombinations.add(curr);
        }
      }
    }
    coinsUsed++;
    queue = Array.from(newCombinations);
  }
  return -1;
}
