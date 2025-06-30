/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let obj = {}
    for (let i = 0; i <= list1.length - 1; i++) {
        str = list1[i]
        obj[str] = i
    }
    let leastSum = Infinity
    let result = []
    for (let i = 0; i <= list2.length - 1; i++) {
        let str = list2[i]
        if (obj[str] >= 0) {
            if (leastSum > obj[str] + i) {
                leastSum = obj[str] + i
                result = [str]
            } else if (leastSum === obj[str] + i) result.push(str)
        }
    }


    return result
};

