/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let vertical = 0
    let horizontal = 0

    for (const move of moves) {
        if (move === "U") vertical += 1

        if (move === "R") horizontal += 1

        if (move === "L") horizontal -= 1

        if (move === "D") vertical -= 1
    }

    if (vertical === 0 && horizontal === 0) {
        return true
    } else {
        return false
    }
};
// var judgeCircle = function (moves) {
//     let obj = { "vertical": 0, "horizontal": 0 }

//     for (const move of moves) {
//         if (move === "U") obj["vertical"] = obj["vertical"]+1

//         if (move === "R") obj["horizontal"] =obj["horizontal"] +1

//         if (move === "L") obj["horizontal"] =obj["horizontal"] -1

//         if (move === "D") obj["vertical"] = obj["vertical"]-1
//     }

//     if (Object.values(obj).filter((val) => val === 0).length === 2) {
//         return true
//     } else {
//         return false
//     }
// };