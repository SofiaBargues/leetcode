/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
    let lowercase = false
    let uppercase = false
    let digit = false
    let specialChar = false

    //  eigthChars 
    if (password.length < 8) return false
    for (let i = 0; i <= password.length - 1; i++) {
        let char = password[i]
        let nextChar = password[i + 1]
        // no two equal toghether
        if (char === nextChar) return false
        if (lowercase === false) {
            if (char.charCodeAt(0) >= "a".charCodeAt(0) && char.charCodeAt(0) <= "z".charCodeAt(0)) lowercase = true
        }
        if (uppercase === false) {
            if (char.charCodeAt(0) >= "A".charCodeAt(0) && char.charCodeAt(0) <= "Z".charCodeAt(0)) uppercase = true
        }
        if (digit === false) {
            if (char.charCodeAt(0) >= "0".charCodeAt(0) && char.charCodeAt(0) <= "9".charCodeAt(0)) digit = true
        }
        if (specialChar === false) {
            if ("!@#$%^&*()-+".indexOf(char) >= 0) specialChar = true
        }
    }

    return specialChar === digit && digit === uppercase && uppercase === lowercase && uppercase === true ? true : false
};

