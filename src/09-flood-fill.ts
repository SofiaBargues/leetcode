function dfs(image: number[][], sr: number, sc: number, prevColor: number, newColor: number): boolean {
    // End condition
    if( sr<0 || sc<0 || sr> image.length-1 || sr> image[0].length-1){
        return false
    }
    if(image[sr][sc] != prevColor){
        return false
    }
    // Pre recursion
    image[sr][sc] = newColor
    // Recursion 
    dfs(image, sr-1, sc, prevColor, newColor)
    dfs(image, sr+1, sc, prevColor, newColor)
    dfs(image, sr, sc-1, prevColor, newColor)
    dfs(image, sr, sc+1, prevColor, newColor)
    // Post recursion
    return true
}


function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const prevColor = image[sr][sc] // 1
    if(color == prevColor){
        return image
    }

    dfs(image, sr, sc, prevColor, color)
    return image
};

function floodFill2(image: number[][], sr: number, sc: number, color: number): number[][] {
    const prevColor = image[sr][sc]    
    if(prevColor == color){ return image}

    const queue: [number, number][]  = [[sr, sc]]
    while(queue.length > 0){
        const [r, c] = queue.pop() as [number, number]
        if(!image[r] || image[r][c] != prevColor){
            continue
        }
        image[r][c] = color
        queue.push([r+1, c], [r-1, c], [r, c+1], [r, c-1])
    }
    return image
};