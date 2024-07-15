# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import defaultdict

class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        # 1. Create an index of parents [L, R]
        registry = defaultdict(lambda: [None, None])
        child_set = set()
        for parent, child, isLeft in descriptions:
            registry[parent][0 if isLeft else 1] = child
            child_set.add(child)

        # 1.5 find root node
        root_val = next(iter(par for par in registry if par not in child_set))

        root = TreeNode(root_val)

        # 2. Dfs from root adding left and right
        def dfs(node) -> None:
            # 3. Stop when not found in index
            if node.val not in registry:
                return

            left, right = registry[node.val]
            if left:
                node.left = TreeNode(val=left)
                dfs(node.left)
            if right:
                node.right = TreeNode(val=right)
                dfs(node.right)


        dfs(root)
        return root


