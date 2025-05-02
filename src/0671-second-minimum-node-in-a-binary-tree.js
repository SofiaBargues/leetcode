
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
var findSecondMinimumValue = function (root) {

    let minimum = root.val
    let secondMinimum = Infinity


    function helper(node) {
        if (node === null) return;


        if (node.val > minimum && node.val < secondMinimum) {
            secondMinimum = node.val
        }

        helper(node.left);
        helper(node.right);
    }

    helper(root)

    return secondMinimum === Infinity ? -1 : secondMinimum
};
