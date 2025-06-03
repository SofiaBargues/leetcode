/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
    let can = capacity

    let i = 0
    let steps = 0

    while (i < plants.length) {
        let currPlant = plants[i]
        let nextPlant = plants[i + 1]
        if (can >= currPlant) {
            steps++
            can = can - currPlant

        } else {
            steps += i * 2 + 1
            can = capacity - currPlant
        }
        i++
    }

    return steps
};

