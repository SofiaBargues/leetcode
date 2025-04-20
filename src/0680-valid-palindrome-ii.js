/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    function isPalindrome(str) {
        let i = 0
        let j = str.length - 1
        while (i < j) {
            if (str[i] === str[j]) {
                i++
                j--
            } else {
                return false
            }
        }
        return true
    }

    i = 0
    j = s.length - 1

    while (i < j) {
        if (s[i] === s[j]) {
            i++
            j--
        } else {
            return isPalindrome(s.slice(i, j)) || isPalindrome(s.slice(i + 1, j + 1))
            // return false
        }
        //  else return true
    }
    return true
};