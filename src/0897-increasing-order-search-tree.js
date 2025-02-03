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
var increasingBST = function (root) {
  let values = [];

  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    values.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  let newRoot = new TreeNode(values[0]);
  let current = newRoot;
  for (let i = 1; i < values.length; i++) {
    current.right = new TreeNode(values[i]);
    current = current.right;
  }

  return newRoot;
};
