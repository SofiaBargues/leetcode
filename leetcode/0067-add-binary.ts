function addBinary(a: string, b: string): string {
    const sum = BigInt("0b"+a)+BigInt("0b"+b)
    const sumStr = sum.toString(2)
    return sumStr
};