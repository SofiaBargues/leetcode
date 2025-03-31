/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let result1 = []
    let result2 = []
    function helper(node, arr) {
        //base
        if(node === null) return
        if (node.left === null && node.right === null) {
            //work
            arr.push(node.val)
            return  
        }
        //recurtion
        helper(node.left, arr)
        helper(node.right, arr)
    }
    helper(root1, result1)
    helper(root2, result2)

    if (result1.length != result2.length) return false
    for (let i = 0; i <= result1.length - 1; i++) {
        if (result1[i] != result2[i]) return false
    }
    return true

};