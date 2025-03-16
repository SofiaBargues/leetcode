/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    return function (n) {
        let right = n
        let left = 1
        while (left <= right) {
            let pivot = Math.floor((right + left) / 2)
            if (isBadVersion(pivot) === false) left = pivot+1
            else {
                right = pivot-1
                if (pivot === 1 || isBadVersion(pivot - 1) === false) return pivot
            }
        }
    };

};