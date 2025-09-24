

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
amount.sort((a,b)=> b-a)

let total=0
while( amount[0]>=1 && amount[1]>=1){
 amount[0]--
 amount[1]--
total++
amount.sort((a,b)=> b-a)
} 
console.log(amount)


return amount[0]===1? total+1 : total
   
};


// /**
//  * @param {number[]} amount
//  * @return {number}
//  */
// var fillCups = function (amount) {
//     let max = 0
//     let total = 0

//     for (let i = 0; i <= 2; i++) {
//         if (amount[i] > max) max = amount[i]
//         total += amount[i]
//     }

//     if (total - max <= max) return max
//     else return Math.ceil(total / 2)
// };