/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function levelOrderDFS(node: TreeNode | null, depth: number, res: number[][]){
    if(!node){
        return
    }

    if(res[depth]){
        res[depth].push(node.val)
    }else{
        res[depth] = [node.val]
    }

    levelOrderDFS(node.left, depth+1, res)
    levelOrderDFS(node.right, depth+1, res)
}

// recursive solution
function levelOrder(root: TreeNode | null): number[][] {
    if(!root){
        return []
    }

    // Should use a real queue for performance reasons when shift
    const result: number[][] = []

    levelOrderDFS(root, 0, result)
    return result
};


function levelOrderWhile(root: TreeNode | null): number[][] {
    if(!root){
        return []
    }

    // Should use a real queue for performance reasons when shift
    const queue: [TreeNode, number][] = [] 

    queue.push([root, 0]) //track height just in case needed in output
    const nodesInOrder:number[][] = []
    let levelNodes = []
    let currLevel = 0
    while(queue.length){
        const [node, level] = queue.shift()!
        if(level != currLevel){
            nodesInOrder.push(levelNodes)
            levelNodes = []
            currLevel++
        }
        levelNodes.push(node.val)
        if(node.left){
            queue.push([node.left, level+1])
        }
        if(node.right){
            queue.push([node.right, level+1])
        }
    }
    nodesInOrder.push(levelNodes)

    return nodesInOrder
};