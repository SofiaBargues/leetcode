/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
    //   fitro las parejas que no tienen coincidencia en X O y 
    let dist = Infinity
    let index = 0

    for (let i = 0; i <= points.length - 1; i++) {
        let point = points[i]
        if (point[0] != x && point[1] != y) continue
        // para cada par de newPoints quequeo la dif de manhattan y guardo la menor 
        let distance = Math.abs(point[0] - x) + Math.abs(point[1] - y)
        if (distance < dist) {
            dist = distance
            index = i
        }

    }
    return dist === Infinity ? -1 : index
};