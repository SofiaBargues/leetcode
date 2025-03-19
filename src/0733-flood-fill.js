/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

function isInGrid(image, i, j) {
    if (i < image.length && i >= 0 && j < image[0].length && j >= 0) return true
    else false
}
var floodFill = function (image, sr, sc, color) {
    if (color === image[sr][sc]) return image

    let dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]
    let colorOrginal = image[sr][sc]
    function paint(i, j, image, color) {
        //base 
        //cuando no esta en grid
        if (!isInGrid(image, i, j)) return
        //cuando no es el mismo color 
        if (image[i][j] != colorOrginal) return
        //work
        image[i][j] = color
        //recurtion
        for (let [x, y] of dirs) {
            paint(x + i, y + j, image, color)
        }
    }
    paint(sr, sc, image, color)
    return image
};