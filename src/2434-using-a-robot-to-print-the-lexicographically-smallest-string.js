
/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
    let t = []
    let p = []

    sArr = s.split("")
    while (sArr.length) {
        
        let smallest = 0
        for (let i = 1; i <= sArr.length - 1; i++) {
            if (sArr[i].charCodeAt(0) < sArr[smallest].charCodeAt(0)) {
                smallest = i
            }
        }
        if (!t.length || sArr[smallest].charCodeAt(0) < t[t.length - 1].charCodeAt(0)) {
            t.push(...sArr.slice(0, smallest + 1))
            sArr = sArr.slice(smallest + 1)
            p.push(t.pop())
        } else {
            p.push(t.pop())
        }

    }
    if (t.length) {
        p.push(...t.reverse())
    }
    return p.join("")
};
