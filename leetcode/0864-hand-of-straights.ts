/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize != 0) {
    return false;
  }

  let cardCount = new Map();
  for (let card of hand) {
    cardCount.set(card, (cardCount.get(card) || 0) + 1);
  }

  let sortedCards = Array.from(cardCount.keys()).sort((a, b) => a - b);

  for (let card of sortedCards) {
    const count = cardCount.get(card);
    if (count > 0) {
      for (let i = 0; i < groupSize; i++) {
        const currCount = cardCount.get(card + i);
        if (!currCount || currCount < count) {
          return false;
        }
        cardCount.set(card + i, currCount - count);
      }
    }
  }
  return true;
};
