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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let root1 = root.left
    let root2 = root.right
    function helper(root1, root2) {
        //base
        if (root1 === null && root2 === null) { return true }
        if (root1 === null || root2 === null) { return false }
        //node work
        if (root1.val != root2.val) { return false }
        //recurtion 
        return helper(root1.left, root2.right) && helper(root2.left, root1.right)

    }
   return helper(root1, root2)
};