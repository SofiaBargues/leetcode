
function updateMatrix(mat: number[][]): number[][] {
    let nextNodes: [number,number][] = []    
    let currNodes: [number,number][] = []
    let currentDistance = 0
    mat.forEach((row, i) => {
        row.forEach((cell, j) => {
            if(cell === 0){
                currNodes.push([i,j])
            }else{
                mat[i][j] = Infinity
            }
        })
    })

    while(currNodes.length || nextNodes.length){
        if(currNodes.length == 0){
            currNodes = nextNodes
            nextNodes = []
            currentDistance++
        }
        const [row, col] = currNodes.pop()
        for(let neighbour of [[row+1, col], [row-1, col], [row, col+1], [row, col-1]]){
            const [i, j] = neighbour
            if(i<0 || i>mat.length-1 || j<0 || j>mat[0].length-1){
                continue
            }
            if(mat[i][j] > currentDistance+1){
                nextNodes.push([i,j])
                mat[i][j] = currentDistance+1
            }

        }
    }
    return mat

};