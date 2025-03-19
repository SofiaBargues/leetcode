/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


function backspaceDelete(s) {
    let stack = []

    for(let char of s) {
        if (char != "#") {
            stack.push(char)
        } else {
            stack.pop()
        }
    }
    return stack.join("")
}

function backspaceCompare(s, t) {
    s = backspaceDelete(s)
    t = backspaceDelete(t)
    return s === t
};



// function backspaceDelete(s) {
//     let i = 0
//     s = s.split("")
//     while (i <= s.length - 1) {
//         if (s[i] === "#") {
//             s[i - 1] = ""
//             s[i] = ""
//             s = s.join("").split("")
//             i -= 2
//         }
//         i++
//     }
//     return s
// }

// var backspaceCompare = function (s, t) {

//     s = backspaceDelete(s)
//     t = backspaceDelete(t)

//     return s.join("") === t.join("")
// };