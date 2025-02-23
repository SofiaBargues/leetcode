/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
    let maxXor = 0
    // 1 encontrar los pares 
    for (i = 0; i <= nums.length - 1; i++) {
      let   numi = nums[i]
        for (j = i; j <= nums.length - 1; j++) {
          let  numj = nums[j]
            // 2 filtrar los pares strogs
            if (Math.abs(numi - numj) <= Math.min(numi, numj)) {
                // 3 guardo el mayor xor del los strongs pairs
                if ((numi ^ numj )> maxXor) maxXor = (numi ^ numj) 
            }
        }
    }
    return maxXor

};