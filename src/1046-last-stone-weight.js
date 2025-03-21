/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a)
        if (stones[0] === stones[1]) {
            stones.shift()
            stones.shift()
        } else {
            //   las borro y sumo una nueva = y - x
            if (stones[0] != stones[1]) {
                stones[1] = stones[0] - stones[1]
                stones.shift()
            }
        }
    }
    return stones[0] ? stones[0] : 0
}