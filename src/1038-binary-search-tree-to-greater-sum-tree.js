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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
    let sum = 0
    function helper(node) {
        //base
        if (node === null) return
        //recurtion

        helper(node.right)
        //work
        node.val = sum + node.val
        sum = node.val

        helper(node.left)
    }
    helper(root)
    return root

};