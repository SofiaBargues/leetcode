/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    let result = 0
    //por cada fruta busco 
    for (let i = 0; i <= fruits.length - 1; i++) {
        let found = false
        //por cada canasta busco
        for (let j = 0; j <= baskets.length - 1; j++) {
            //si fruta es <= canasta 
            if (fruits[i] <= baskets[j]) {
                baskets[j] = 0
                found = true
                break
            }
        }
        if (!found) result++
    }
    return result
};