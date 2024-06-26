# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def balanceBST(self, root: TreeNode) -> TreeNode:
        arr = self.BSTtoSorted(root)
        return self.sortedArrayToBST(arr)


    def BSTtoSorted(self, root: TreeNode) -> List[int]:
        nums = []
        def dfs(node):
            if not node:
                return
            
            dfs(node.left)
            nums.append(node.val)
            dfs(node.right)
        dfs(root)
        return nums

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
