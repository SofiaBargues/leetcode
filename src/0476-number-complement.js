/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let binary = num.toString(2)
    let result = ""
    for (let i = 0; i <= binary.length - 1; i++) {
        if (binary[i] === "1") {
           result= result+"0" 
        } else { result= result+"1"  }
    }
    return parseInt(result, 2);

};