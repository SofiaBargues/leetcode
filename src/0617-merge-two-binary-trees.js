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
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  // BASE
  if (root1 === null) {
    return root2;
  } else if (root2 === null) {
    return root1;
  }
  // NODO
  root1.val = root1.val + root2.val;
  // RECURSION
  // izq
  // if ambos tienen hijo izq
  if (root1.left != null && root2.left != null) {
    // me muevo al nodo izq en ambos
    mergeTrees(root1.left, root2.left);
  } else if (root2.left != null) {
    root1.left = root2.left;
  }

  // derecho
  if (root1.right != null && root2.right != null) {
    // me muevo al nodo izq en ambos
    mergeTrees(root1.right, root2.right);
  } else if (root2.right != null) {
    root1.right = root2.right;
  }

  return root1;
};
