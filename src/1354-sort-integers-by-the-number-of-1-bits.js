/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    //cantidad de 1 bits
    function bitsOf(num) {
        console.log()
        return num.toString(2).split("").filter((x) => x === "1").length
    }

    arr.sort((a, b) => {
        bitsA = bitsOf(a)
        bitsB = bitsOf(b)
        console.log(a, b)
      return  bitsA === bitsB ? a - b : bitsA - bitsB
    })
    return arr
};