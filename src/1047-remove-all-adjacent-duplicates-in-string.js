/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let arr = s.split("")
    let result =[]

    for (let i = 0; i <= arr.length - 1; i++) {
       if (arr[i]!= result[result.length-1]) result.push(arr[i])
       else {
         result.pop()
       }
    }

    return result.join('')

};

