/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let version1Arr = version1.split(".").map((x) => Number(x))
    let version2Arr = version2.split(".").map((x) => Number(x))



    while (version1Arr.length < version2Arr.length) {
        version1Arr.push("0")
    }
    while (version1Arr.length > version2Arr.length) {
        version2Arr.push("0")
    }


    for (let i = 0; i <= version1Arr.length - 1; i++) {
        if (version1Arr[i] > version2Arr[i]) return 1
        else if (version1Arr[i] < version2Arr[i]) return -1
    }

    return 0

};

