/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let nStr= words.length
    let chars= words.join("")
    let obj={}
    for (let char of chars){
        if (char in obj) obj[char]=obj[char]+1
        else obj[char]=1
    }
    
    let frec=Object.values(obj)
    return frec.every((x)=> x%nStr===0)
    };