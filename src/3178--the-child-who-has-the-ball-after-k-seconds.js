/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function (n, k) {
    if (k < n) return k
    // n=2-1
    n = n - 1
    //    2/1= 2  
    let vueltas = Math.floor(k / n)
    //          0
    let lastMovments = k % n
    if (vueltas % 2 === 0) {
        return  lastMovments
    } else {
        return n - lastMovments
    }

};