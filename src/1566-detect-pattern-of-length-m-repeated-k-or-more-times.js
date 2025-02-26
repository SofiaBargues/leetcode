/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */

//  arr = [1,2,4,4,4,4], m = 1, k = 3
var containsPattern = function (arr, m, k) {
    //        2
    let acc = 0
    //           4
    for (let i = 0; i <= arr.length - m; i++) {
        //      4           4  
        if (arr[i] === arr[i+m]) {
            acc++
        } else {
            acc =0
        }
        // console.log(acc, (k-1)*m)
    //    2          2 
     if (acc === (k-1)*m) return true
    }
    return false
};