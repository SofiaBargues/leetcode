/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    //por cada array 
    //hago un dicionario
    if (s.length!=t.length) return false
    let hashMapS = {}
    let hashMapT = {}
    let numS = 1
    let numT = 1
    let newS = ""
    let newT = ""
    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] in hashMapS) {
            newS = newS + String(hashMapS[s[i]])
        } else {
            //donde a cada letra le asigno un num
            hashMapS[s[i]] = numS
            numS++
            newS = newS + String(hashMapS[s[i]])
        }
    }
    //reemplazo cada letra por su numero

    for (let i = 0; i <= t.length - 1; i++) {
        if (t[i] in hashMapT) {
            newT = newT + String(hashMapT[t[i]])
        } else {
            hashMapT[t[i]] = numT
            numT++
            newT = newT + String(hashMapT[t[i]])
        }
    }
    //comparo los arr si son iguales return true 
    console.log(newS,newT)
    return newS=== newT
    
};