/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let totalLasers = []
    let acc = 0

    for (const line of bank) {
        let total = line.split("").filter((x) => x === "1").length
        if (total > 0) {
            totalLasers.push(total)
        }
    }
    for (let i = 0; i <= totalLasers.length - 2; i++) {
        acc += (totalLasers[i] * totalLasers[i + 1])
    }
    return acc
};

