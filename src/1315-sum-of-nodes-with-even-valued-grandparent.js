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
var sumEvenGrandparent = function (root) {
  let acc = 0;

  function helper(node, padre, abuelo) {
    //caso base
    if (!node) return;
    //trabajo con el nodo actual
    if (abuelo != null && abuelo % 2 === 0) {
      acc += node.val;
    }
    //recursion
    helper(node.left, node.val, padre);
    helper(node.right, node.val, padre);
  }
  helper(root, null, null);
  return acc;
};
