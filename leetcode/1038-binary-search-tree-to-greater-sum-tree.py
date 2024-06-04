# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstToGst(self, root: TreeNode) -> TreeNode:

        def dfs(node: TreeNode, curr_sum: int):
            if not node:
                return curr_sum

            right = dfs(node.right, curr_sum)
            curr_sum = right + node.val
            node.val = curr_sum
            left = dfs(node.left, curr_sum)
            return left

        dfs(root, 0)
        return root
