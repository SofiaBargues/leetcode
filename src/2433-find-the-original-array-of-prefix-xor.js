/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
    let i = 1
    let result = [pref[i - 1]]

    for (i; i <= pref.length - 1; i++) {
        result.push(pref[i] ^ pref[i - 1]);
    }

    return result
};