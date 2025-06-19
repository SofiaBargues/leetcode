/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const indexedScores = score.map((val, idx) => [val, idx])
    indexedScores.sort((a, b) => b[0] - a[0])
    let result = new Array(score.length)

    for (let i = 0; i < indexedScores.length; i++) {
        const originalIndex = indexedScores[i][1];
        if (i === 0) {
            result[originalIndex] = "Gold Medal"
        } else if (i === 1) {
            result[originalIndex] = "Silver Medal"

        } else if (i === 2) {
            result[originalIndex] = "Bronze Medal"
        } else {
            result[originalIndex] = String(i + 1)
        }
    }
    return result
};

