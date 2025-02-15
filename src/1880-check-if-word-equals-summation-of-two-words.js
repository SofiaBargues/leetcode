/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
    let numericalVaules = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25
    };
    let firstNum = []
    //para cada char de firstWord 
    for (const char of firstWord) {
        //busco su valor y lo guardo en firstNum
        firstNum.push(numericalVaules[char])
    }
    firstNum = Number(firstNum.join(""))

    let secondNum = []
    //para cada char de firstWord 
    for (const char of secondWord) {
        //busco su valor y lo guardo en firstNum
        secondNum.push(numericalVaules[char])
    }
    secondNum = Number(secondNum.join(""))


    let targetNum = []
    //para cada char de firstWord 
    for (const char of targetWord) {
        //busco su valor y lo guardo en firstNum
        targetNum.push(numericalVaules[char])
    }
    targetNum = Number(targetNum.join(""))

    return firstNum+ secondNum=== targetNum
}