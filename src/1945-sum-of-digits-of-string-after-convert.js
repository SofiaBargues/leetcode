/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let numericalVaules = {
  a:"1",
  b: "2",
  c: "3",
  d: "4",
  e: "5",
  f: "6",
  g: "7",
  h: "8",
  i: "9",
  j: "10",
  k: "11",
  l: "12",
  m: "13",
  n: '14',
  o: "15",
  p: "16",
  q: '17',
  r: "18",
  s: "19",
  t: "20",
  u: "21",
  v:" 22",
  w: "23",
  x: '24',
  y: "25",
  z: "26"
};
    let strNums = ""
    for (const char of s) {
        strNums = strNums + numericalVaules[char]
    }
     let number=0
    while (k >= 1) {
        arrNums = strNums.split("").map((x) => Number(x))
        number = arrNums.reduce((acc, curr) => acc + curr, 0)
        strNums = String(number)
        k--
    }

    return number
};