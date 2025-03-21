/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    let min = Infinity
    let obj = {}
    //sort the arr
    arr.sort((a, b) => a - b)
    //go thougth all the pair 
    for (let i = 0; i <= arr.length - 2; i++) {
        let a = arr[i]
        let b = arr[i + 1]
        //dif=calculate the minimum absolute difference 
        let dif = Math.abs(b - a)
        //min> dif min=dif
        if (min > dif) min = dif

        if (!(dif in obj)) {
            //add it as key and pair as value
            obj[dif] = [[a, b]]
        } else {
            //add to the value the new pair 
            obj[dif] = [ ...obj[dif],[a, b]]
        }
    };
    return obj[min]
    // return []
};