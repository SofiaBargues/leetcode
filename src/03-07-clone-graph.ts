/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */




function cloneGraph(root: Node | null): Node | null {
    if(!root){
        return null
    }

    const nodeMap = new Map<Node, Node>()

    function dfs(node: Node | null): Node | null{

        if(!node){
            return null
        }

        if(nodeMap.has(node)){
            return nodeMap.get(node)
        }
        // Store in set
        const newNode = new Node(node.val)
        nodeMap.set(node, newNode)

        newNode.neighbors = node.neighbors.map(n => dfs(n))
        // Build on backtrack
        return newNode
    }

    return dfs(root)
};