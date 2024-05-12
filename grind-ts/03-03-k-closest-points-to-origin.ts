function kClosest(points: number[][], k: number): number[][] {
    let result: [number, number, number][] = []
    let resultMaxDist = Infinity
    let resultMaxIdx = -1

    for(const [x,y] of points){
        const dist = x*x+y*y
        if(dist < resultMaxDist){
            result.push([x,y,dist])
            if(result.length > k){
                // evict
                result = [...result.slice(0, resultMaxIdx), ...result.slice(resultMaxIdx+1)]
            }
            if(result.length === k){
                // find new max
                resultMaxDist = -1
                result.forEach((curr, i) => {
                    if(curr[2]>resultMaxDist){
                        resultMaxIdx = i
                        resultMaxDist = curr[2]
                    }
                })
            }
        }
    }

    return result.map(el => el.slice(0,2))
};