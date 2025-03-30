/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function (flowerbed, n) {
    let total = 0
    for (let i = 0; i <= flowerbed.length - 1; i++) {
        if (flowerbed[i - 1] != 1 && flowerbed[i] === 0 && flowerbed[i + 1] != 1) {
            total++
            flowerbed[i] = 1
        }
        if (total >= n) return true
    }
    return false
};