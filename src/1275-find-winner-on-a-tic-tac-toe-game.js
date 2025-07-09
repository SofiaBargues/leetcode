/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    let grid = [["", "", ""], ["", "", ""], ["", "", ""]]
    let isA = true
    for (const [row, col] of moves) {
        if (isA) {
            grid[row][col] = "X"
            isA = false
        } else {
            grid[row][col] = "O"
            isA = true
        }
    }


    for (let i = 0; i <= 2; i++) {
        if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2] && grid[i][2] != "") {
            if (grid[i][0] === "X") return "A"
            return "B"
        }
        if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] && grid[2][i] != "") {
            if (grid[0][i] === "X") return "A"
            return "B"
        }
    }

    if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[2][2] != "") {
        if (grid[0][0] === "X") return "A"
        return "B"
    }
    if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] && grid[2][0]!="") {
        if (grid[0][2] === "X") return "A"
        return "B"
    }

    // console.log(grid.flat().filter((x) => x != ""))
    return grid.flat().filter((x) => x != "").length === 9 ? "Draw" : "Pending"

};

