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
var reverseOddLevels = function (root) {
    level = [root]
    levelNum = 0
    while (level.length > 0) {
        nextLevel = []
        //nivelWork    
        if (levelNum % 2 != 0) {
            let levelReversed = level.map((x) => x.val).reverse()
            for (let i = 0; i <= level.length - 1; i++) {
                level[i].val = levelReversed[i]
            }
        }

        for (const node of level) {
            //node Work

            if (node.left) nextLevel.push(node.left)
            if (node.right) nextLevel.push(node.right)
        }
        levelNum++
        level = nextLevel
    }
    return root
};