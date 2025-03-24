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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    if (!root) return
    let queue = [root]
    while (queue.length > 0) {
        let node = queue.shift()
        if (node.val != root.val) return false
        if (node.right) queue.push(node.right)
        if (node.left) queue.push(node.left)
    }

    return true
};/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {TreeNode} root
* @return {boolean}
*/
var isUnivalTree = function (root) {
   if (!root) return
   let queue = [root]
   while (queue.length > 0) {
       let node = queue.shift()
       if (node.val != root.val) return false
       if (node.right) queue.push(node.right)
       if (node.left) queue.push(node.left)
   }

   return true
};