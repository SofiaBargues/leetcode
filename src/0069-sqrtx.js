/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x == 0) return 0

    let result = 0
    num = 1
    let r = Math.floor(x / 2)
    let l = 1


    while (l < r) {
        let mid = Math.floor((l + r) / 2)
        let num = mid
        if ((num * num) === x) {
            return num
        } else if ((num * num) > x) {
            r=mid-1
        } else {
            l=mid+1
        }
    }
    return l*l > x ? l-1 : l
};