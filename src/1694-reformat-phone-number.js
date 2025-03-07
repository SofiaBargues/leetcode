/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
    let result = []
    number = number.split("").filter((x) => x != " " && x != "-").join("")
    let l = number.length
    for (i = 0; i <= l - 1; i = i + 3) {
        let rem = l  - i
        // si el largo es > 4 
        if (rem > 4) {
            // agarro el pedazo de tres
            result.push(number.slice(i, i + 3))
            // sino si es ===3 agrego el pedazo de tres
            //     break
        } else if (rem === 3) {
            result.push(number.slice(i, i + 3))
            break
        } else if (rem === 4) {
            // sino si es ===4 agrego dos pedazos de dos 
            result.push(number.slice(i, i + 2))
            result.push(number.slice(i + 2, i + 4))
            break
        } else {
            // sino agrego el pedazo de dos  
            result.push(number.slice(i, i + 2))

            break
        }
    }
    return result.join("-")
};