

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    let sArr = s.split("")
    for (let i = 0; i <= s.length - 1; i++) {
        if (sArr[i] === "?") {
            let left = i - 1 < 0 ? null : sArr[i - 1].charCodeAt(0)
            let right = i + 1 > s.length - 1 ? null : sArr[i + 1].charCodeAt(0)
            let selected = 97
            while (selected === left  ||  selected === right) {
                selected++
            }

            sArr[i] = String.fromCharCode(selected)

        }

    }
    return sArr.join("")
};