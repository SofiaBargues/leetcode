/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    
    let arr=[...edges[0],...edges[1]]
    let set= new Set()
    for (const num of arr){
        if (set.has(num)) return num
        else set.add(num)
    }
    return 0
};