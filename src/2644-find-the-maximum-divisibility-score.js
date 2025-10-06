

/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
    
    let smallest=Infinity
    let numScore = [0, 0]
    for (const div of divisors) {
        let score = 0
        for (const num of nums) {
            if (num % div === 0) score++
        }
        if (div<smallest)smallest=div
        if (score > numScore[1]) numScore = [div, score]
        if (score === numScore[1] && div < numScore[0]) numScore[0] = div
    }

    return  numScore[0] === 0 ? smallest : numScore[0]


};