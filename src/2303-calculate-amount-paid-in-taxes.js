

/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
    let prev = 0
    let total = 0
    for (let i = 0; i <= brackets.length - 1; i++) {
        let [upper, rate]= brackets[i]
        if (income<=prev )break
        let taxIncome = Math.min(upper, income)-prev 

        total += taxIncome * (rate/100)
        prev = upper
    }

    return total
};