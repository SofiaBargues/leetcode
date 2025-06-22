

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    if (deck.length === 1) return false
    let obj = {}
    for (const card of deck) {
        if (!(card in obj)) { obj[card] = 1 }
        else obj[card]++
    }
    let arrTimes = Object.values(obj)
    let smallest = Math.min(...arrTimes)

    for (let i = 2; i <= smallest; i++) {
        let isDivisible = true
        for (const time of arrTimes) {
            if (time % i != 0) {
                isDivisible = false
                break
            }
        }
        if (isDivisible) return true

    }
    return false

};