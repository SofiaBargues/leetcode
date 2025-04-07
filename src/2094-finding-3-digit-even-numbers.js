/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
    let obj = {}
    for (const digit of digits) {
        if (digit in obj) obj[digit]++
        else obj[digit] = 1
    }
    function possible(num) {
        let cloneObj = { ...obj }
        let arr = String(num).split("")
        for (const char of arr) {
            if (!(char in cloneObj)) {
                return false
            } else {
                if (cloneObj[char] === 0) {
                    return false
                } else {
                    cloneObj[char]--
                }
            }
        }
        return true
    }

    let result = []
    for (let i = 100; i <= 999; i++) {

        if (possible(i) && i % 2 === 0) result.push(i)
    }
    return result
};