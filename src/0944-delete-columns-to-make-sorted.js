/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
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
    let totalDeleted = 0
    // Por cada col
    for (let i = 0; i <= strs[0].length - 1; i++) {
        let prevVal = 0
        //  por cada letra
        for (let j = 0; j <= strs.length - 1; j++) {
            let char = strs[j][i]
            let currVal = numericalVaules[char]
            if (prevVal > currVal) {
                totalDeleted++
                break
            } else {
                prevVal = currVal
            }
        }

    }
    return totalDeleted
};