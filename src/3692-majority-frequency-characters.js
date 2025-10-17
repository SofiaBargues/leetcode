

/**
 * @param {string} s
 * @return {string}
 */
var majorityFrequencyGroup = function (s) {
    let frecc = {}
    for (const char of s) {
        if (frecc[char]) frecc[char]++
        else frecc[char] = 1
    }
    let group = {}
    for (const [char, times] of Object.entries(frecc)) {
        if (group[times]) group[times].add(char)
        else group[times] = new Set([char])

    }


    let max = [0, new Set()]
    let secondMax = [0, new Set()]

    for (const [times, chars] of Object.entries(group)) {
        console.log("entrie", [times, chars])
        if (chars.size > max[1].size) {
            console.log("> ")
            secondMax = max
            max = [times, chars]
        } else if (chars.size === max[1].size) {
            console.log(" === ")
            if (times > max[0]) {
                secondMax = max
                max = [times, chars]
            } else if (times === max[0]) {
                secondMax = [times, chars]
            }

        }

    }
    return Array.from(max[1]).join("")
};