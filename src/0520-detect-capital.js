/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {

    if (word.length === 1) return true
    let range = word[1].charCodeAt(0) <= 90 ? "upper" : "lower"

    for (let i = 1; i <= word.length - 1; i++) {
        if (range === "upper") {
            if (word[i].charCodeAt(0) > 90)
            return false
        } else if (range === "lower") {
            if (word[i].charCodeAt(0) < 97) {
                return false
            }
        }
    }

    if (range === "upper" && word[0].charCodeAt(0) > 90) {
        return false;
    }

    return true
};

