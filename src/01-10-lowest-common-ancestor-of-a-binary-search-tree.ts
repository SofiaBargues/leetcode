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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	// Base case
    const [low, high] = p.val < q.val ? [p.val, q.val] :  [q.val, p.val]
    if(!root){ return null}
    if(root.val <= high && root.val >= low){
        return root
    }else if(root.val < low){
        // Traverse to larger numbers
        return lowestCommonAncestor(root.right, p, q)
    }else{
        // Traverse to smaller numbers
        return lowestCommonAncestor(root.left, p, q)
    }
};


function lowestCommonAncestor2(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	// Base case
    let currentNode = root // 6
    const [low, high] = p.val < q.val ? [p, q] : [q, p]
    while(currentNode.left && currentNode.right){
        if(currentNode.val > high.val){
            currentNode = currentNode.left
        }else if(currentNode.val < low.val){
            currentNode = currentNode.right
        }else{
            return currentNode
        }
    }

    return currentNode.val >= low.val && currentNode.val <= high.val ? currentNode : null
};