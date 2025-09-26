
/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order, friends) {
    let set = new Set(friends)
    let result = []
    for (const id of order) {
        if (set.has(id)) result.push(id)
    }

    return result
};
