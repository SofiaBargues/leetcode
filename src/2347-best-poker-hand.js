/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
    let set = new Set(suits)
    let obj = {}
    if (set.size === 1) return "Flush"
    for (const rank of ranks) {
        if (rank in obj) obj[rank] += 1
        else obj[rank] = 1
    }
    let sorted = Object.entries(obj).sort(([keyA, valA], [keyB, valB]) => {
        if (valA != valB) return valB - valA
    })

    let val = sorted[0][1]
    return val >= 3 ? "Three of a Kind" : val === 2 ? "Pair" : "High Card"
};