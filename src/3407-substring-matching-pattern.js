/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function (s, p) {
    let found = 0
    if (p === "*") return true
    const [first, second] = p.split("*")
    if (first === "") found++

    for (let i = 0; i <= s.length - 1; i++) {
        if (found === 0) {
            //buscamos first
            let l = first.length
            if (s.slice(i, i + l) === first) {
                found++
                i=i+l-1
            }
        } else if (found === 1) {
            ///buscamos second
            let l = second.length
            if (s.slice(i, i + l) === second) {
                found++
                return true
            }
        }
    }
    if (second === "") found++

    return found === 2

};

