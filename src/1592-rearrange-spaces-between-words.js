/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    let words = text.split(" ").filter((x) => x != "")
    let espaces = text.length - words.join("").length
    let div = Math.floor(espaces / (words.length - 1))
    let mod = espaces % (words.length - 1)
    let result = []

if (words.length===1){
    mod = espaces
}
    for (let i = 0; i <= words.length - 2; i++) {
        let word = words[i]
        result.push(word)
        result.push(...Array(div).fill(" "))
    }

    result.push(words[words.length - 1])
    if(mod)
    {
    result.push(...Array(mod).fill(" "))
    }   
    
    return result.join("")
};