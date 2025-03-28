/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  return parseInt(
    n
      .toString(2)
      .split("")
      .map((x) => (x === "1" ? "0" : "1"))
      .join(""),
    2
  );
};
