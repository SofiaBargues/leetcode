/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
    let digits = new Set("0123456789");
    let result = new Set([])
    let num=""
    for (const char of word) {
        if (digits.has(char)){
            num=num+char
        } else if (num !="") {
            result.add(BigInt(num).toString())
            num=""
        }
    }
    if(num!=""){
        result.add(BigInt(num).toString())
    }
    return result.size
};

