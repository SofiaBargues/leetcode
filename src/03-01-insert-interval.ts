function insert(intervals: number[][], newInterval: number[]): number[][] {
    const output = []
    for(let i =0; i<intervals.length; i++){
        const [insertStart, insertEnd] = newInterval
        const [currStart, currEnd] = intervals[i]

        if(currEnd < insertStart){
            output.push(intervals[i])
        }else if(currStart > insertEnd){
            output.push(newInterval)
            return output.concat(intervals.slice(i))
        }else{
            // They overlap
            newInterval = [
                Math.min(insertStart, currStart),
                Math.max(insertEnd, currEnd)
            ]
        }

    }
    output.push(newInterval)
    return output

};




function insertWithPaths(intervals: number[][], newInterval: number[]): number[][] {
    const [newStart, newEnd] = newInterval
    let startInsertPath = null
    let endInsertPath = null

    for(let i =0; i<intervals.length; i++){
        const [currStart, currEnd] = intervals[i]
        if(!startInsertPath && currStart >= newStart){
            // Open a new interval
            startInsertPath = [i, 0]
        }else if (!startInsertPath && currEnd >= newStart){
            // extend the curr interval
            startInsertPath = [i, 1]
        }
        if(!endInsertPath && currStart > newEnd){
            // Open a new interval
            endInsertPath = [i, 0]
        }else if (!endInsertPath && currEnd > newEnd){
            // extend the curr interval
            endInsertPath = [i, 1]
        }
    }
    if(!startInsertPath){
        intervals.push(newInterval)
        return intervals
    }
    if(!endInsertPath){
        const [i, isEnd] = startInsertPath
        if(isEnd){
            intervals.splice(i, intervals.length-i, [intervals[i][0], newEnd])    
        }else{
            intervals.splice(i, intervals.length-i, [newStart, newEnd])   
        }
        return intervals
    }

    const [iStart, iStartSubIdx] = startInsertPath
    const [iEnd, iEndSubIdx] = endInsertPath
    const replaceInterval = [
        iStartSubIdx ? intervals[iStart][0] : newStart,
        iEndSubIdx ? intervals[iEnd][1] : newEnd]

    intervals.splice(
        iStart,
        iEndSubIdx ? iEnd - iStart + 1: iEnd-iStart ,
        replaceInterval)

    // handle insertion
    return intervals
};