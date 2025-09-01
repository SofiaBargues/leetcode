let set=new Set (["A","E","I","O","U","a","e","i","o","u"])
let vowels=[]
let positions=[]
for (let i =0; i <= s.length-1;i++){
    if (set.has(s[i])){
        vowels.push(s[i])
        positions.push(i)
    }
    
}

vowels.sort((a, b)=> a.charCodeAt(0)-b.charCodeAt(0))
let t= s.split("")
for (let i =0; i <= positions.length-1;i++){
    let position= positions[i]
    let vowel= vowels[i]
    t[position]=vowel
}

return t.join("")


