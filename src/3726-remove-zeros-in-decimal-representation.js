/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
   let result=String(n).split("").filter((x)=> x!="0").join("")
   return Number(result)
};