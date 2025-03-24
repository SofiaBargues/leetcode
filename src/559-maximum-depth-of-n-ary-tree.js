/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    let maxLevel = 0
    if (!root) return 0;
    let level = [root];
    while (level.length > 0) {
        nextLevel = []
        for (const node of level) {
          for(const child of node.children){
            if (child) nextLevel.push(child);}
        }
        // work
        // update
        level = nextLevel
        maxLevel++
    }
    return maxLevel
};