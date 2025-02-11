/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
    let output = 0

    // for num of nums 
    for (const num of nums) {
        let bigNum = 0
        if (num > 9) {
            //do the thing
            let numLength = String(num).length
            let arr = String(num).split("")
            arr.forEach((x) => {
                if (Number(x) > bigNum) { bigNum = Number(x) }
            })
            //fill the length with bigNum
            output += Number(arr.fill(bigNum).join(""))
            // sum to output

        } else {
            //sum it  to output
            output += num
        }

    }
    return output
}