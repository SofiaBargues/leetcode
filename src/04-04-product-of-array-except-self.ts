function productExceptSelf(nums: number[]): number[] {
  let hasOneZero = false;
  let hasTwoZeros = false;
  const totalProductWithoutZeros = nums.reduce((acc, num) => {
    if (num == 0) {
      if (!hasOneZero) {
        hasOneZero = true;
      } else if (!hasTwoZeros) {
        hasTwoZeros = true;
      }
      return acc;
    }
    return acc * num;
  }, 1);

  if (hasTwoZeros) {
    return new Array(nums.length).fill(0);
  }

  return nums.map((num) => {
    if (hasOneZero) {
      if (num == 0) {
        return totalProductWithoutZeros;
      } else {
        return 0;
      }
    } else {
      return totalProductWithoutZeros / num;
    }
  });
}
