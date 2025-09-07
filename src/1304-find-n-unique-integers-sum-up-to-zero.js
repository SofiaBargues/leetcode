/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    let arr = new Array(n)

    let total = 0
    if (n === 2) { return [-1, 1] }
    for (let i = 0; i <= n - 2; i++) {
        // seteo su i como valor
        arr[i] = i
        total += i
    }
    arr[n - 1] = -total
    return arr
};


/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    
    let result = []

    if (n % 2 != 0) {
        result.push(0)
        n--
    }

    for (let i = 1; i <= n / 2; i++) {
        result.push(-i)
        result.push(i)
    }

    return result
};