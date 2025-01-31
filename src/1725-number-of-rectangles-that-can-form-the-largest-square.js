/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
    let minArr = []
    // ordenar de menor a mayor las medidas
    for (const rectangle of rectangles) {
        rectangle[0] > rectangle[1] ? minArr.push(rectangle[1]) : minArr.push(rectangle[0])
    }
    //Buco la mayor de las menores medidas
    //devuelvo cuantas veces aparece entre las menores
    return (minArr.filter((x) => x === Math.max(...minArr))).length
};