

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    if (start > destination) {
        [start, destination] = [destination, start];
    }

    let directDistance = 0;
    let totalDistance = 0;

    for (let i = 0; i < distance.length; i++) {
        if (i >= start && i < destination) {
            directDistance += distance[i];
        }
        totalDistance += distance[i];
    }

    let reverseDistance = totalDistance - directDistance;

    return Math.min(directDistance, reverseDistance)
};