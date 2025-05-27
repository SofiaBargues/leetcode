/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let lastG = 0;
  let lastP = 0;
  let lastM = 0;
  let G = 0;
  let M = 0;
  let P = 0;

  for (let i = 0; i <= garbage.length - 1; i++) {
    let house = garbage[i];
    for (char of house) {
      if (char === "G") {
        G++;
        lastG = i;
      }
      if (char === "M") {
        M++;
        lastM = i;
      }
      if (char === "P") {
        P++;
        lastP = i;
      }
    }
  }
  let travelTimeG = travel.slice(0, lastG).reduce((acc, curr) => acc + curr, 0);
  let travelTimeM = travel.slice(0, lastM).reduce((acc, curr) => acc + curr, 0);
  let travelTimeP = travel.slice(0, lastP).reduce((acc, curr) => acc + curr, 0);
  console.log(travel.slice(0, lastM));
  console.log(M, P, G, "travelTimeM", travelTimeM, travelTimeG, travelTimeP);
  return M + P + G + travelTimeM + travelTimeG + travelTimeP;
};
