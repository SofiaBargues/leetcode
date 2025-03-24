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
var averageOfLevels = function (root) {
    if (!root) return;
    let level = [root];
    let result = []
    while (level.length > 0) {
        let nextLevel = []
        let levelValue = []
        for (const node of level) {
            // console.log(node.val);
            levelValue.push(node.val);
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        }
        // work
        l = levelValue.length
        // console.log(levelValue);
        totalSum = levelValue.reduce((acc, curr) => acc + curr, 0)
        // console.log(totalSum, l);
        result.push(totalSum / l)

        // update
        level = nextLevel
    }
    return result
};