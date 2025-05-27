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
var averageOfSubtree = function (root) {
  let acc = 0;
  function helper(node) {
    //caso base
    if (!node) return [0, 0];
    //recursion
    let left = helper(node.left);
    let right = helper(node.right);
    let totalNodos = 0;
    let totalSum = 0;
    //trabajo con el nodo actual
    totalSum = node.val + left[0] + right[0];
    totalNodos = left[1] + right[1] + 1;
    console.log(left, right, totalSum, totalNodos);
    if (Math.floor(totalSum / totalNodos) === node.val) {
      console.log("counted");
      acc++;
    }

    return [totalSum, totalNodos];
  }
  helper(root);
  return acc;
};
