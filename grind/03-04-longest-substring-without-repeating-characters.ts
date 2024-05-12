function lengthOfLongestSubstring(s: string): number {
    let left = 0
    let right = 0  
    let maxChars = 0
    const charSet = new Set<string>()
  
    while(right < s.length){
        const newChar = s[right]
        if(charSet.has(newChar)){
              while(s[left] != newChar){
                  charSet.delete(s[left])
                  left++
              }
              // don't remove newChar (because it was repeated) and advance one after finding it
              left++
        }else{
            charSet.add(newChar)
            if(charSet.size > maxChars){
                maxChars = charSet.size
            }
        }
        right++
    }
    return maxChars
  };

  function lengthOfLongestSubstringTrivial(s: string): number {
    let maxChars = 0
  //   const charSet = new Set<string>()
    const scanner: string[] = []
  
    for(const char of s){
        const charIdx = scanner.indexOf(char)
        if(charIdx != -1){
          // repeated char
          scanner.splice(0, charIdx+1) //Delete until Idx
        }
        scanner.push(char)
        // Memo maximum
        maxChars = Math.max(maxChars, scanner.length)
    }
    return maxChars
  };