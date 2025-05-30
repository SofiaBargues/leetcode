
/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    //oredeno el deck
    deck.sort((a, b) => a - b)
    // console.log(deck)
    //reverse-Reveal algo
    let result = [deck.pop()]
    //mientras tengo cartas
    while (deck.length > 0) {
        // console.log(deck.length)
        result.unshift(result.pop())
        result.unshift(deck.pop())
        // console.log(result)
    }
    return result

};
