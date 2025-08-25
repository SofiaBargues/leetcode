
/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
    while (k > 0) {
        let big = 0
        let index = 0
        for (let i = 0; i <= gifts.length - 1; i++) {
            if (gifts[i] > big) {
                big = gifts[i]
                index = i
            }
        }
        gifts[index] = Math.floor(Math.sqrt(big))
        k--
    }
    return gifts.reduce((acc, curr)=> acc+curr,0)
};
