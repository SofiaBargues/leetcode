/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    const obj = {
        a: "A", A: "a",
        b: "B", B: "b",
        c: "C", C: "c",
        d: "D", D: "d",
        e: "E", E: "e",
        f: "F", F: "f",
        g: "G", G: "g",
        h: "H", H: "h",
        i: "I", I: "i",
        j: "J", J: "j",
        k: "K", K: "k",
        l: "L", L: "l",
        m: "M", M: "m",
        n: "N", N: "n",
        o: "O", O: "o",
        p: "P", P: "p",
        q: "Q", Q: "q",
        r: "R", R: "r",
        s: "S", S: "s",
        t: "T", T: "t",
        u: "U", U: "u",
        v: "V", V: "v",
        w: "W", W: "w",
        x: "X", X: "x",
        y: "Y", Y: "y",
        z: "Z", Z: "z"
    };

    let stack = []
    for (const char of s) {
        //cumpmple condicion
        if (stack[stack.length - 1] === obj[char]) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.join("")
};