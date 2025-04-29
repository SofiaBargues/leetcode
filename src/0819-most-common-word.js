

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let words = paragraph.replace(/[^\w\s]/gi, ' ').replace(",", " ").split(" ").map((x) => x.toLowerCase().trim()).filter((x) => x != "")
    let set = new Set(banned)
    let obj = {}

    let hightFrecc = ["x", 0]
    for (const word of words) {

        if (obj[word]) {

            obj[word] = obj[word] + 1
        } else if (!set.has(word)) {

            obj[word] = 1
        }
        if (obj[word] && obj[word] > hightFrecc[1]) hightFrecc = [word, obj[word]]
    }
    return hightFrecc[0]
};