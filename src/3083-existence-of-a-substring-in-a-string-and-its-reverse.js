/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  //set con todos los posibles sub arr
  let subArrs = new Set();
  for (let i = 0; i <= s.length - 2; i++) {
    subArrs.add(s.slice(i, i + 2));
  }
  let reversed = s.split("").reverse().join("");

  //go trought reverse chequeando si estan en el set

  for (let i = 0; i <= s.length - 2; i++) {
    if (subArrs.has(reversed.slice(i, i + 2))) {
      return true;
    }
  }
  return false;
};
