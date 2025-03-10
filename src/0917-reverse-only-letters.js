/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let left = 0
    let right = s.length - 1
    let arrS=s.split("")
    while (left <= right) {
        if (s[left].match(/[a-z]/i) && s[right].match(/[a-z]/i)) {
            //swapp 
            let swapp = arrS[left]
            arrS[left] = arrS[right]
            arrS[right] = swapp
            right--
            left++
            continue
        } else if (!arrS[left].match(/[a-z]/i)) {
            left++
        } else if (!arrS[right].match(/[a-z]/i)) {
            right--
        }

    }

    return arrS.join("")
};