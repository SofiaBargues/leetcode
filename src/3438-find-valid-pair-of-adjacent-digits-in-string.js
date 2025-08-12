/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function (s) {
    let map = new Map

    for (const num of s) {
        map.set(num, (map.get(num) || 0) + 1);

    }

    for (let i = 1; i <= s.length - 1; i++) {
        let num1 = s[i - 1]
        let num2 = s[i]
            if (num1 != num2 && map.get(num1) === Number(num1) && map.get(num2) === Number(num2))
                return num1 + num2
    }
    return ""
};

