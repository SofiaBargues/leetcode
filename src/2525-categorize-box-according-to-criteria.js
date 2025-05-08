/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  let result = [];
  let biggest = Math.max(length, width, height);
  let volume = length * width * height;
  console.log(8 * 10 ** 6);
  console.log(biggest, Math.pow(10, 4), volume, 100);
  if (biggest >= Math.pow(10, 4) || volume >= Math.pow(10, 9))
    result.push("Bulky");
  if (mass >= 100) result.push("Heavy");

  console.log(result);
  if (result.length === 2) return "Both";
  else if (result.length === 0) return "Neither";
  return result[0];
};
