# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstToGst(self, root: TreeNode) -> TreeNode:
        
        def dfs(node: TreeNode, curr_sum: int) -> int:
            if not node:
                return curr_sum
            right_sum = dfs(node.right, curr_sum)
            node.val = right_sum + node.val
            left_sum = dfs(node.left, node.val)
            return left_sum

        dfs(root, 0)
        return root