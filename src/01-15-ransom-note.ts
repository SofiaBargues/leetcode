function canConstruct(ransomNote: string, magazine: string): boolean {
    const letters = new Array(26).fill(0)
    const aCode = 'a'.charCodeAt(0)
    magazine.split('').forEach(char => {
       const idx = char.charCodeAt(0) - aCode
       letters[idx] = letters[idx] + 1 
       }
    )
   const ransomChars = ransomNote.split('') 
    for(let i=0; i<ransomChars.length; i++){
       const idx = ransomNote[i].charCodeAt(0) - aCode
           letters[idx]  = letters[idx] - 1 
           if(letters[idx] < 0){
               return false
           }

    }
    return true
};