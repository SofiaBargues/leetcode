/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
    let result = []
    function helper(curr) {
        //base
        //si cuando llego al length 
        if (curr.length === n) {
            result.push(curr)
            return
        }
        //si el ultimo char es 0
        if (curr[curr.length - 1] === "0") {
            helper(curr + '1')
        } else {
            helper(curr + '0')
            helper(curr + '1')
        }
    }
    helper("")
    return result
};