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
var sumRootToLeaf = function (root) {
    let result = 0
    let prev = []
    function helper(node) {
        //caso base  
        if (!node) return
        //work
        prev.push(node.val)
        //recursion
        helper(node.left)
        helper(node.right)
        if (node.right === null && node.left === null) {
            result += parseInt(prev.map((x) => String(x)).join(""), 2)
        }
        prev.pop()
    }
    helper(root)
    return result
};