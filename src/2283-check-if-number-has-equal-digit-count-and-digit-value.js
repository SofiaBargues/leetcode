/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    let obj = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
    }

    let n = num.length

    for (let i = 0; i <= num.length - 1; i++) {
        obj[num[i]]++
    }

    return Object.values(obj).slice(0, n).map((x) => String(x)).join("") === num
};

