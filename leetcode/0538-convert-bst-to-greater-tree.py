# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:

        def dfs(node: Optional[TreeNode], curr_sum: int) -> int:
            if node is None:
                return curr_sum

            right_sum = dfs(node.right, curr_sum)

            curr_sum = right_sum + node.val
            node.val = curr_sum

            left_sum = dfs(node.left, curr_sum)
            return left_sum

        dfs(root, 0)
        return root
