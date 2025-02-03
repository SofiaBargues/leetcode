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
var inorderTraversal = function (root) {
  let arr = [];

  function helper(root) {
    // BASE
    if (root === null) return;
    // RECURSION
    helper(root.left);
    // TRABAJO CON EL NODO
    arr.push(root.val);
    // RECURSION
    helper(root.right);
  }
  helper(root);
  return arr;
};
