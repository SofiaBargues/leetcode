/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    //tatal of chars on s
    totalChars=s.length
    //total of letters in s
    totalLettersOnS= s.split("").filter((x)=> x===letter).length
    // console.log(
    // totalLettersOnS, totalChars, Math.floor(totalLettersOnS/totalChars*100))
    //calculate the %
    // return 0
    return Math.floor(totalLettersOnS/totalChars*100)  
    };