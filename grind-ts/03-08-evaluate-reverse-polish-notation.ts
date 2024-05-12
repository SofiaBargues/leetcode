function operate(num1:number, num2: number, token: string){
    switch(token){
        case '+':
            return num1+num2
        case '-':
            return num1-num2
        case '*':
            return num1*num2
        case '/':
            return Math.trunc(num1/num2) 
        default:
            throw Error('unkonwn operand')
    }
}

function evalRPN(tokens: string[]): number {
    const stack = []
    for(const token of tokens){
        const parsed = parseInt(token)
        if(Number.isInteger(parsed)){
            stack.push(parsed)
        }else{
            const num2 = stack.pop()
            const num1 = stack.pop()
            const res = operate(num1, num2, token)
            stack.push(res)
        }
    }

    return stack[0]
};