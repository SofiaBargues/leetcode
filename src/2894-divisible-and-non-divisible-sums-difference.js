/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  const arr2 = new Array(n).fill(0).map((v, i) => i + 1);
  console.log(arr2);
  const arr = Array.from({ length: n }, (v, i) => i + 1);
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % m === 0) {
      num2 = num2 + arr[i];
    } else {
      num1 = num1 + arr[i];
    }
  }

  return num1 - num2;
};
