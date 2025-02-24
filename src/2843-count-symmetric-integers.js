/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    function isSymmetric(number) {
        let str = String(number)
        let length = str.length
        let half = length / 2


        let totalStart = 0
        let totalEnd = 0
        for (let i = 0; i < length / 2; i++) {  // loop until i is less than n/2
            totalStart += parseInt(str[i]);  // update the left sum
            totalEnd += parseInt(str[length - i - 1]);  // update the right sum
        }

        // let arrStartNum = str.slice(0, half).split("").map((char) => Number(char))
        // let arrEndNum = str.slice(half).split("").map((char) => Number(char))
        // console.log(arrStartNum,arrEndNum)
        // let totalStart = arrStartNum.reduce((acc, curr) => acc + curr, 0)
        // let totalEnd = arrEndNum.reduce((acc, curr) => acc + curr, 0)
        // // console.log(totalStart,totalEnd)
        return totalStart === totalEnd

    }
    let total = 0
    let i = low
    // 1 go thougth all numbers from 1 to 100
    while (i <= high) {
        // 2 if is even and is symmetric
        let l = String(i).length
        // i=10

        if (l % 2 != 0) {
            i = 10 ** (l)
        } else {
            if (isSymmetric(i)) {
                // 3 sum 1 to result 
                total++
            }
            i++
        }
    }
    return total
};