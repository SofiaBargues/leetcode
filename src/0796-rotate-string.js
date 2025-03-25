/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length!=goal.length) return false
for(let i=0;i<=s.length-1; i++){
let isValid=true
 for(let j=0; j<=s.length-1;j++){
    let charS=s[(i+j)%s.length]
    if (goal[j]!=charS){
        isValid=false
    break
    }
}
if (isValid)return true
}
return false                
};
// var rotateString = function(s, goal) {
//      let arrS = s.split("")
//     let arrGoal = goal.split("")
//     let l = arrS.length

//     if (arrS.length != arrGoal.length) return false

//     while (l > 0) {
        
//         if (arrS.join("") != arrGoal.join("")) {
//             char = arrS.shift()
//             arrS.push(char)
//             l--
//         }
//         else
//             return true
//     }
//     return false
// };