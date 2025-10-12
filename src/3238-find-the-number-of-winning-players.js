
/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function (n, pick) {
    let winners = 0
    let counter = {}
    for (const [key, val] of pick) {
        if (counter[key]) {
            counter[key] = [...counter[key], val]
        } else { counter[key] = [val] }
    }

    function isAWinner(key, val) {
        let colorCount = {}
        for (let color of val) {
            colorCount[color] = (colorCount[color] || 0) + 1
        }
        for (let count of Object.values(colorCount)) {
            if (count > Number(key)) {
                return true
            }
        }
        return false


    }


    for (const [key, val] of Object.entries(counter)) {
        if (n > 0) {

            if (isAWinner(key, val)) {
                winners++
            }
            n--
        }
    }

    return winners
};
