/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let  obj={}
    for(const char of word1){
        if (char in obj) obj[char]=obj[char]+1
        else obj[char]=1
    }
    
    for( char of word2){
       if (char in obj){ 
            obj[char]=obj[char]-1
       }else{
            obj[char]=-1
       }
    }
         
    return Object.values(obj).filter((x)=> x>3 || x<-3).length===0? true: false
    
    };