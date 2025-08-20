

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function(s, k) {
let obj={}

for(const char of s){
    if (obj[char]) obj[char]++
    else obj[char]=1
}

let counter =0
let arr=Object.values(obj).sort((a,b)=>b-a)


while (arr.length>k ){
    //delete the less frequent
    counter+= arr.pop()
}
return counter   
};