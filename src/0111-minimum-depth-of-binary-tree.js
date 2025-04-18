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
var minDepth = function (root) {
    let smallestHeight = Infinity
    if (!root)return 0
    function helper(node, height) {
        //base 
        if (!node) return
        //work
        //si la hoja actual es menor la guardo
        if (!node.left && !node.right) {
            if (height < smallestHeight) smallestHeight = height
            // console.log(node, height)
        }

        //recursion
        helper(node.left, height + 1)
        helper(node.right, height + 1)
    }
    helper(root, 1)
    // console.log(smallestHeight)
    // return 1
    return smallestHeight
};