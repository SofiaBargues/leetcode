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

var postorderTraversal = function (root) {
    let result = []
function helper(node){
        //base
        if (node === null) return
        //recursion
        helper(node.left)
        helper(node.right)
        result.push(node.val)
    }
    helper(root)
    return result
};