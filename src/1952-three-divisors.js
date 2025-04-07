/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    // 
    let sqrt = Math.sqrt(n)
    
    if (!Number.isInteger(sqrt)) return false


    for (let i = 2; i < sqrt; i++) {
        if (sqrt % i === 0) return false
    }

    return sqrt > 1
};