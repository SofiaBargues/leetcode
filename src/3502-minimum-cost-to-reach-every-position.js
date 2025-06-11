
/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function (cost) {
    let smallest = Infinity
    let result = []
    for (const place of cost ) {
        if (place < smallest) smallest = place
        result.push(smallest)
    }
    return result
};
