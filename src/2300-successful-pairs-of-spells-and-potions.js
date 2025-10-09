

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b);
    const m = potions.length
    let resultArr = new Array(spells.length)

    for (let i = 0; i <= spells.length - 1; i++) {
        const spell = spells[i]
        const need = Math.floor((success + spell - 1) / spell)
        let l = 0
        let r = m
        while (l < r) {
            const mid = Math.floor((l + r) / 2)
            if (potions[mid] < need) l = mid + 1
            else r = mid
        }
        resultArr[i] = m - l
    }
    console.log(resultArr)
    return resultArr
};