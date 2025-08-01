/**
 * @param {number} numRows
 * @return {number[][]}
 */
function rowBuilder(arr) {
    let newRow = []
    for (let i = 0; i <= arr.length; i++) {
        const a = arr[i-1] || 0
        const b = arr[i] || 0
        newRow.push(a+b)
    }
    return newRow
}

var generate = function (numRows) {
    let result = [[1]]
    let missingRows = numRows
    // increase up to n rows result.length
    while (missingRows > 1) {
        //build the new row 
        //save it 
        result.push(rowBuilder(result[result.length - 1]))
        missingRows--
    }
    return result
};









/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    function increase(arr) {
        let result = []
        for (let i = -1; i <= arr.length - 1; i++) {
            let j = i + 1
            if (i === -1) {
                result.push(1)
            } else if (j === arr.length) {
                result.push(1)
            } else {
                result.push(arr[i] + arr[j])
            }

        }
        return result
    }



    let result = []
    //por cada num de rows contruyo un arr
    for (let i = 0; i < numRows; i++) {
        if (result.length === 0) {
            //agrego [1]
            result.push([1])
        }else if (result.length === 1) {
            //agrego [1, 1] 
            result.push([1, 1])
        }else if (result.length > 1) {
            result.push(increase(result[result.length - 1]))
        }
    }
       return result
};