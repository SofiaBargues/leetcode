/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function (s, k) {
  // K to binary
  let kBinary = k.toString(2);
  if (kBinary.length >= s.length) return s.length;

  let end = s.length - kBinary.length;

  let result = s
    .slice(0, end)
    .split("")
    .filter((x) => x === "0").length;
  console.log(
    s
      .slice(0, end)
      .split("")
      .filter((x) => x === "0")
  );
  let sSmaller = s.slice(end);

  if (parseInt(sSmaller, 2) <= k) {
    result += s.slice(end).length;
  } else {
    result += s.slice(end).length - 1;
  }

  return result;
};
