/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
    const [r1sX, r1sY, r1eX, r1eY] = rec1
    const [r2sX, r2sY, r2eX, r2eY] = rec2
    return !(
        r1eX <= r2sX ||
        r1eY <= r2sY ||
        r1sX >= r2eX ||
        r1sY >= r2eY
    );
};