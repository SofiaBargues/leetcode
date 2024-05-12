//  use Kahn's algorithm to attempt a topological sort on the graph.
// This works because no topological sorting can be found for a graph with a cycle
// If we weren't able to visit all nodes,
// then that means that some nodes must have been locked in a cycle,
// so completing all courses is impossible and we'll return False.

// Kahn's algo
// Build adjacency list graph and indegree list
// BFS
// Build queue of starting nodes with indegree 0 (no requirements)
// Traverse from there and reduce neighbours indegree
// If indegree == 0, then its unlocked, add it to the queue
// Once queue is exhausted, all courses unlocked if visited == numCourses

function isAcyclic(graph:Map<number, number[]>, current: number,  visited: Set<number>, path: number[] ): boolean{
    const neighbours = graph.get(current)
    if(!neighbours){
        return true
    }
    if(path.includes(current)){
        // Cycle found
        return false
    }
    if(visited.has(current)){
        // Already checked
        return true
    }

    // Setup
    path.push(current)
    // Save to avoid revisiting
    visited.add(current)

    const acyclic = neighbours.every((neighbour)=>
        isAcyclic(graph, neighbour, visited, path)
    )

    // cleanup
    path.pop()
    // Acyclic so far
    return acyclic

}

function canFinishCycleTraversal(numCourses: number, prerequisites: number[][]): boolean {
    const graph:  Map<number, number[]> = prerequisites.reduce(
        (graph, [needed, forCourse]) => {
            if(graph.has(forCourse)){
                graph.set(forCourse, [...graph.get(forCourse)!, needed])
            }else{
                graph.set(forCourse, [needed])
            }
            return graph
    }, new Map<number, number[]>())

    // Verify that every requisite can be fulfilled
    // Means, has been traversed without finding a cycle
    let nodesVisited = new Set<number>()
    for(let i = 0; i<numCourses; i++){
        if(nodesVisited.has(i)){
            continue
        }
        const isDag = isAcyclic(graph,  i, nodesVisited, [])
        if(!isDag){
            return false
        }
    }
    return true
};