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
var deepestLeavesSum = function (root) {

    if (!root) return []

    let queue = [root];
    let lastLevel = [];

    while (queue.length > 0) {
        let level = []
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift()
            level.push(node.val)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        lastLevel = level
    }


    return lastLevel.reduce((acc, curr) => acc + curr, 0)
};