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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let set = new Set()

    function helper(node) {
        //base 
        if (node === null) return false
        //work
        if (set.has(k - node.val)) return true
        set.add(node.val)
        //recursion

        return helper(node.left) || helper(node.right)
    }

    return helper(root)

};