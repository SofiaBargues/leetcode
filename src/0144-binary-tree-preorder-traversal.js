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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let result = []
    function helper(node) {
        //caso base  
        if (!node) return
        //work
        result.push(node.val)
        //recursion
        helper(node.left)
        helper(node.right)
    }
    helper(root)
    return result
};