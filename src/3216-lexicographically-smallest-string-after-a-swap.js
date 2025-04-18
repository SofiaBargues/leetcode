/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
    let arr = s.split("").map((x) => Number(x))
    console.log(arr)
    //para cada arr[i] 
    for (let i = 0; i <= s.length - 2; i++) {
        console.log(arr[i + 1], arr[i])
        //si son los dos pares o impares
        let sameParity = arr[i] % 2 === 0 && arr[i + 1] % 2 === 0 || arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 ? true : false
        // si sameParity && arr[i]>arr[i+1]
        if (sameParity && arr[i] > arr[i + 1]) {
            let keeper = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = keeper
            return String(arr.join(""))
        }
        console.log(String(arr.join("")))
    }
    return s
};