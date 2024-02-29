function longestPalindrome(s: string): number {
    // const aChar = 'a'.charCodeAt(0)
    const counter = {}
    const chars = s.split('')
    for(let i=0; i<chars.length; i++){
        const char = chars[i]
        const charCount = counter[char]
        if(charCount!= undefined){
            counter[char] = counter[char]+1
        }else{
            counter[char] = 1
        }
    }

    let firstOdd = false 
    return Object.values<number>(counter).reduce((acc, curr) =>{
       if(curr%2){
           if(!firstOdd){
               firstOdd = true
               return acc + curr
           }
           return acc + curr-1
       }else{
        return acc + curr
       }
   }, 0)
};