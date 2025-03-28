/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let t = 0;
  let t1 = 1;
  let t2 = 1;
  let t3 = t + t1 + t2;
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else if (n === 2) return 1;
  n = n - 3;
  while (n > 0) {
    t = t1;
    t1 = t2;
    t2 = t3;
    t3 = t + t1 + t2;
    n = n - 1;
  }
  return t3;
};