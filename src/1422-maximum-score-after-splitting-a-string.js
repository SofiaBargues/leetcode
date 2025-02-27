/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    function total(s1, s2) {
        // console.log(s1,s2)
        part1 = s1.split("").filter((x) => x === "0").length
        part2 = s2.split("").filter((x) => x === "1").length
        return part1 + part2
    }

    let max = 0
    for (let i = 1; i <= s.length-1; i++) {
        let part1 = s.split("").slice(0,i).join("")
        let part2 = s.split("").slice(i, s.length).join("")
        // console.log( i, part1 , part2)
        if (max < total(part1, part2)) {
            max = total(part1, part2)
        }
    }
    return max
};