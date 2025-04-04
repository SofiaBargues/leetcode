/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    result = []
    let set = new Set()
    let pairs = 0
    for (let i = 0; i <= A.length - 1; i++) {
        if (set.has(A[i])) pairs += 1
        else set.add(A[i])
        if (set.has(B[i])) pairs += 1
        else set.add(B[i])


        result.push(pairs)
    }
    return result
};