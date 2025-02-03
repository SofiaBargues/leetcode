/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  let delayedArrivalTime = arrivalTime + delayedTime;
  if (delayedArrivalTime >= 24) return delayedArrivalTime - 24;
  return delayedArrivalTime;
};
