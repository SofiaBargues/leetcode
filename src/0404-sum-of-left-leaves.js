/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let total = 0

    function helper(node, isLeft) {
        //base
        if (node === null) return null
        //work
        if (isLeft && node.left === null && node.right === null) total += node.val
        //recursion 
        helper(node.left, true)
        helper(node.right, false)
    }
    helper(root, false)
    return total
}