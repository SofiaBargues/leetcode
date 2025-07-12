
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    let result = new Array(s.length).fill(Infinity)
    let count = 0
    let foundC = false

    for (let i = 0; i <= s.length - 1; i++) {
        let char = s[i]
        if (char === c) {
            count = 1
            result[i] = 0
            foundC = true
        } else if (foundC) {
            result[i] = count
            count++
        }
    }
    count = 0
    foundC = false
    for (let i = s.length - 1; i >= 0; i--) {
        let char = s[i]
        if (char === c) {
            count = 1
            foundC = true
        } else if (foundC) {
            result[i] = Math.min(count, result[i])
            count++
        }
    }

    return result
};





// /**
//  * @param {string} s
//  * @param {character} c
//  * @return {number[]}
//  */
// var shortestToChar = function(s, c) {
//     //largo del array
//     let n = s.length;
//     //inicializo un array con el largo de s con valor inicial Infinito
//     let result = new Array(n).fill(Infinity);
// // seteo los valores de las distacias 0 a lenght
//     let prev = -Infinity; 
//     for (let i = 0; i < n; i++) {
//         if (s[i] === c) {
//             prev = i; 
//         }
//         result[i] = i - prev; 
//     }

// // seteo los valores de las distacias 0 a lenght
//     prev = Infinity; 
//     for (let i = n - 1; i >= 0; i--) {
//         if (s[i] === c) {
//             prev = i;
//         }
//         result[i] = Math.min(result[i], prev - i); 
//     }

//     return result;
// };
