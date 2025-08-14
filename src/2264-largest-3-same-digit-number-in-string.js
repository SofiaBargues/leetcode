/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let max = ""
    for (let i = 0; i <= num.length - 1; i++) {
        console.log(max, num[i])
        if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
            if (max < num[i]) max = num[i]
            i += 2
        }
    }
    return max + max + max
};

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let nums = num.split("").map((x) => Number(x))
    let maximumGood = [-1, 0]
    for (let i = 0; i <= num.length - 1; i++) {
        let num1 = nums[i]
        let num2 = nums[i + 1]
        let num3 = nums[i + 2]
        if (num1 === num2 && num2 === num3) {
            if (num1 > maximumGood[0]) {
                maximumGood = [num1, i]

            }
        }

    }
        return maximumGood[0] < 0 ? "" : num.slice(maximumGood[1], maximumGood[1] + 3)
};




