# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        root = TreeNode()

        def dfs(node, l, r):
            if l > r:
                return
            	
            m = (l+r)//2
            node.val = nums[m]

            if l < m:
                node.left = TreeNode()
                dfs(node.left, l, m-1)
            if m < r:
                node.right = TreeNode()
                dfs(node.right, m+1, r)

        dfs(root, 0, len(nums)-1)
        return root
