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


function diameterOfBinaryTree(root: TreeNode | null): number {

    let globalDiameter = 0
    function dfs(root: TreeNode | null){
        if(!root){
            return 0
        }

        const left = dfs(root.left)
        const right = dfs(root.right)

        globalDiameter = Math.max(globalDiameter, left+right) 
        return Math.max(left, right) + 1
    }

    dfs(root)
    
    return  globalDiameter
};



// Return [height, localDiameter]
function dfs(root: TreeNode | null){
    if(!root){
        return [0, 0]
    }

    const left = dfs(root.left)
    const right = dfs(root.right)
    const localDiameter = left[0]+right[0]
        return [Math.max(left[0], right[0]) + 1, Math.max(localDiameter, left[1], right[1])]


}

function diameterOfBinaryTreeStructuredReturn(root: TreeNode | null): number {
    const heightAndDiameter = dfs(root)
    console.log(heightAndDiameter)
    return  heightAndDiameter[1]
};