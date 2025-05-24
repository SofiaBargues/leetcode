
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    let result = []
    for (let i = 0; i <= boxes.length - 1; i++) {
        let acc = 0
        for (let j = 0; j <= boxes.length - 1; j++) {
            if (boxes[j] === "1") {
                acc += Math.abs(i - j)
            }
        }
        result.push(acc)
    }
    return result
};
