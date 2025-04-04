/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
  let i = 0;
  let j = 0;
  let macht = 0;
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  while (i <= players.length - 1 && j <= trainers.length - 1) {
    if (players[i] <= trainers[j]) {
      macht++;
      i++;
      j++;
    } else if (players[i] > trainers[j]) {
      j++;
    }
  }

  return macht;
};
