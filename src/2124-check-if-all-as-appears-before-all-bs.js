
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {

let bIndex=s.indexOf("b")
if (bIndex===-1) return true
let aIndex=s.slice(bIndex, s.length).indexOf("a")

return aIndex===-1 
};
