/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
    let l = palindrome.length
    let arr = palindrome.split("")
    let changed = false

    for (let i = 0; i < Math.floor(l / 2); i++) {
        if (arr[i] != "a") {
            arr[i] = "a"
            changed = true
            break
        }
        if (i === Math.floor(l / 2) - 1 && !changed) {
            arr[l - 1] = "b"
            changed = true
        }
    }
    return changed ? arr.join("") : ""
};

