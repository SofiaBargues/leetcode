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
var diameterOfBinaryTree = function (root) {
    let maxLength = 0

    function helper(node) {
        //base
        if (node === null) return 0
        //recursion
        let left = helper(node.left)
        let right = helper(node.right)
        maxLength = Math.max(left+ right, maxLength)
        //work
        return Math.max(left, right) + 1
    }

    helper(root)
    return maxLength
};