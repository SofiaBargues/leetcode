/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    salary.sort((a, b) => a - b)
    salary.pop()
    salary.shift()
    let total = salary.reduce((curr, acc) => acc + curr, 0)
    return total / salary.length
};