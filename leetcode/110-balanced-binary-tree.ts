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


function dfs(node: TreeNode | null, height: number): number | null{
    if(!node){
        return height
    }
   const leftHeight = dfs(node.left, height+1)
   const rightHeight = dfs(node.right, height+1)
   return leftHeight != null && rightHeight != null && Math.abs(leftHeight-rightHeight) <= 1 ? Math.max(leftHeight, rightHeight) : null 
}

function isBalanced(root: TreeNode | null): boolean {
    return dfs(root, 0) != null
};



function isBalanced2(root: TreeNode | null): boolean {
    const test = getDifference(root)
    return test >= 0
};

function getDifference(node: TreeNode | null): number {
    
    // If there's no node, return 0
    if (!node) return 0
    // Get the left height
    const leftDepth = getDifference(node.left)
    // Get the right height
    const rightDepth = getDifference(node.right)
    // If one of the sides is imbalanced, the whole tree is imbalanced
    if (leftDepth < 0 || rightDepth < 0) return -1
    // If the difference between the two is too big, return -1
    if (Math.abs(leftDepth - rightDepth) > 1) return -1
    // Else, return that largest side + 1 (+1 accounts for the current depth)
    return Math.max(leftDepth, rightDepth) + 1
}