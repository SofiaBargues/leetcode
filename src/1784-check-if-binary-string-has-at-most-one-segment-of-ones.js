/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
    return  !s.includes("01")
};
// var checkOnesSegment = function (s) {
//     let ones = s.split("").filter((x) => x === "1").length
// //    console.log(ones)
//     for (i = 0; i <=ones-1; i++) {
//         if (s[i] != "1") return false
//     }

//     return true
// };