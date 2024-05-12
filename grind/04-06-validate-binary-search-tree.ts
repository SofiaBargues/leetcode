/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function traverseBST(node: TreeNode | null, min: number, max: number) {
  if (!node) {
    return true;
  }

  if (node.val >= max || node.val <= min) {
    return false;
  }

  return (
    traverseBST(node.left, min, node.val) &&
    traverseBST(node.right, node.val, max)
  );
}

function isValidBST(root: TreeNode | null): boolean {
  return traverseBST(root, -Infinity, Infinity);
}
