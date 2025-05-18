/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  let increasing = 0;
  let decreasing = 0;
  for (let i = 1; i <= arr.length - 1; i++) {
    let prev = arr[i - 1];
    let curr = arr[i];
    if (prev < curr && decreasing === 0) {
      increasing++;
    } else if (prev > curr && increasing != 0) {
      decreasing++;
    } else return false;
  }
  return increasing != 0 && decreasing != 0;
};
