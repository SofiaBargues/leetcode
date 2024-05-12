const openToCloseMap = {
    '(':')',
    '[':']',
    '{':'}'
}

function isValid(s: string): boolean {
    const stack: ("(" | "[" | '{')[] = []
    const chars = s.split('')
    for(let i=0; i<chars.length; i++){
        if(['(','[', '{'].includes(chars[i])){
            stack.push(chars[i] as "(" | "[" | '{')
        }else if([')',']', '}'].includes(chars[i])) {
            const lastOpen = stack.pop()
            if(!lastOpen || openToCloseMap[lastOpen] != chars[i]){
                return false
            }
        }
    }
    return stack.length == 0
};