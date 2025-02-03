/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let acc = 0
    //num of number
    for (const num of nums) {
        //num.length%2===0
        if (String(num).length % 2 === 0) {
            //sum one to acc  
            acc++
        }
    }
    return acc
};