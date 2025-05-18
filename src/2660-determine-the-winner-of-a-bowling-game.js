

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
    let acc1 = 0
    for (let i = 0; i <= player1.length - 1; i++) {
        let point = player1[i]
        if (player1[i - 1] === 10 || player1[i - 2] === 10) acc1 = acc1 + point * 2
        else acc1 += point
    }
    let acc2 = 0
    for (let i = 0; i <= player2.length - 1; i++) {
        let point = player2[i]
        if (player2[i - 1] === 10 || player2[i - 2] === 10) acc2 = acc2 + point * 2
        else acc2 += point
    }

    if (acc2 === acc1) return 0
    else if (acc2 > acc1) return 2
    return 1
};