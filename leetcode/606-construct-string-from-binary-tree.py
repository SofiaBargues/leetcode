# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def tree2str(self, root: Optional[TreeNode]) -> str:

        def dfs(node: Optional[TreeNode]) -> str:
            if not node:
                return ""

            left = dfs(node.left)
            right = dfs(node.right)

            if left and right:
                return f"{node.val}({left})({right})"
            elif left:
                return f"{node.val}({left})"
            elif right:
                return f"{node.val}()({right})"
            # Not left, not right
            return str(node.val)

        return dfs(root)
