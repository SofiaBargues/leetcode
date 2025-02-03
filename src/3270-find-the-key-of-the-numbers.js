/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
  function fill(num) {
    num = String(num).padStart(4, "0");
    return num;
  }
  arr1 = fill(num1);
  arr2 = fill(num2);
  arr3 = fill(num3);

  let result = "";
  for (let i = 0; i <= 3; i++) {
    // let parcial = []
    // //para cada
    // parcial.push(Number(arr1[i]))
    // parcial.push(Number(arr2[i]))
    // parcial.push(Number(arr3[i]))

    //     // el mas pequeno de cada grupo
    result = result + String(Math.min(arr1[i], arr2[i], arr3[i]));
    //     //lo guardo en i
    // }
  }

  console.log(result);
  return Number(result);
};
