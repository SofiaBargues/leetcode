/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
    let ind = 0
    let penalty = customers.split("").filter((x) => x === "Y").length
    let minPe = penalty
    for (let i = 0; i <= customers.length - 1; i++) {
        let currPe = penalty

        if (customers[i] === "Y") currPe--
        if (customers[i] === "N") currPe++


        if (currPe < minPe) {
            minPe=currPe
            ind = i+1
        }
        penalty = currPe
    }
    return ind
};