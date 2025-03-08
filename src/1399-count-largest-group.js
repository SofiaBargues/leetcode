/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    let obj = {}
    let max=0
    // voy desde 1 hasta n
    for (let i = 1; i <= n; i++) {
        //     calculo la suma de sus digitos
        let num =i
        let key = num.toString().split("").map((x) => Number(x)).reduce((acc, curr) => acc + curr, 0)
        //     si existe
        if (key in obj) {
            //         en el objeto sumo 1 para la suma de sus digitos 
            obj[key] = obj[key] + 1
            
        } else {
            //     si no 
            //         agrgo a obj suma de sus digitos con vslor 1
            obj[key] = 1
        }
        if (obj[key]>max) max=obj[key]
    }
    // hago un arr de todos los valores 
    let sizes = Object.values(obj)
    // max val 
    let largestSize = max
    return sizes.filter((x) => x === largestSize).length
};