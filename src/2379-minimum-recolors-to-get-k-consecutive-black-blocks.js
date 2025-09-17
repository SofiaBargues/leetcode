
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let minW = Infinity
    for (let i = 0; i <= blocks.length - k; i++) {
        let w = blocks.slice(i, k+i).split("").filter((x) => x === "W").length
        if (w < minW) minW = w

    }

    return minW
};
