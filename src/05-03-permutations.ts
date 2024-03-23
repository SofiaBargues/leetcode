// Backtracking based
function permuteBacktracking(nums: number[]): number[][] {
  const result = [];

  if (nums.length === 1) {
    return [nums];
  }

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const remaining = nums.filter((num) => num != current);
    let perms = permute(remaining);

    for (let j = 0; j < perms.length; j++) {
      result.push([...perms[j], current]);
    }
  }
  return result;
}

function dfs(nums: number[], path: number[], result: number[][]) {
  if (nums.length == 0) {
    result.push([...path]);
    return;
  }

  nums.forEach((num, i) => {
    path.push(num);
    const remaining = [...nums.slice(0, i), ...nums.slice(i + 1)];
    dfs(remaining, path, result);
    path.pop();
  });
}

function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  dfs(nums, [], result);
  return result;
}
