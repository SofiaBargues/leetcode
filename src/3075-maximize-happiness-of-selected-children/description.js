/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
    happiness.sort((a, b) => b - a)

    let total = 0
    let i = 0

    while (k > 0 && i <= happiness.length - 1) {
        if (happiness[i] - i === 0) return total
        console.log(total, happiness[i], i, k)
        total += Math.max(happiness[i] - i, 0)

        k--
        i++
    }

    return total

};