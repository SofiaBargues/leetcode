/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    arr.sort((a, b) => a - b)
    //    2             [1,3,5]
    let distance = arr[1] - arr[0]

    for (let i = 1; i <= arr.length - 2; i++) {
           // 3
        let curr = arr[i]
           // 5
        let next = arr[i + 1]
//              2             2
        if ( next - curr != distance) return false
    }
    return true
};






























// var canMakeArithmeticProgression = function (arr) {
//     arr.sort((a, b) => a - b)
//     let set = new Set()
//     for (let i = 0; i <= arr.length - 2; i++) {
//       let  curr = arr[i]
//       let  next = arr[i + 1]
//         set.add(Math.abs(curr - next))
//     }

//     return set.size === 1 ? true : false
// };