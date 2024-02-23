function isPalindrome(s: string): boolean {
    const sanitized = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return sanitized.split('').reverse().join('') == sanitized
};


function isPalindrome2(s: string): boolean {
    const sanitized = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const n = sanitized.length-1
    const mid = Math.floor(n/2)
    for(let i = 0; i<= mid; i++){
        if(sanitized[i] != sanitized[n-i]){
            return false
        }
    }
    return true
};

