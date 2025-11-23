/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
    let mod1 = []
    let mod2 = []
    let total = 0
    nums.sort((a, b) => b - a)

    for (const num of nums) {
        if (num % 3 === 0) total += num
        else if (num % 3 === 1) mod1.push(num)
        else mod2.push(num)
    }

    let totalMod = mod1.reduce((acc, curr) => acc + curr, 0) + mod2.reduce((acc, curr) => acc + curr, 0)


    if (totalMod % 3 === 0) return total + totalMod
    else if (totalMod % 3 === 1) {
        if(mod2.length >= 2 && mod1.length >= 1){
            return total + totalMod - Math.min(mod2[mod2.length - 1] + mod2[mod2.length - 2], mod1[mod1.length - 1])
        }
        else if (mod1.length >= 1) {
            return total + totalMod - mod1[mod1.length - 1]
        } else {
            return total + totalMod - mod2[mod2.length - 1] - mod2[mod2.length - 2]
        }
    } else { // totalMod % 3 === 2
        if (mod2.length >= 1 && mod1.length >= 2) {

            return total + totalMod - Math.min(mod1[mod1.length - 1] + mod1[mod1.length - 2], mod2[mod2.length - 1])
        } else {
            if (mod1.length >= 2) {
                return total + totalMod - mod1[mod1.length - 1] - mod1[mod1.length - 2]
            } else { // mod2.length >= 1
                return total + totalMod - mod2[mod2.length - 1]

            }
        }
    }

};