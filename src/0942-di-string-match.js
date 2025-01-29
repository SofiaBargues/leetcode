/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const result = [];
    let countI = 0;
    let countD = s.length;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I") {
            result.push(countI);
            countI++;
        } else {
            result.push(countD);
            countD--;
        }
    }
    
    result.push(s[s.length - 1] === "I" ? countD : countI);
    
    return result;
};