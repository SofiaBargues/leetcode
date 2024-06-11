# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumEvenGrandparent(self, root: TreeNode) -> int:
        def dfs(node: TreeNode, parent_even: bool, gradparent_even: bool):
            if not node:
                return 0

            curr = node.val if gradparent_even  else 0
            curr_even = node.val%2 == 0
            return curr + dfs(node.left, curr_even, parent_even) + dfs(node.right, curr_even, parent_even)
        return dfs(root, False, False)
