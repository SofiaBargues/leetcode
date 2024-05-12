# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':

        if not root or root == p or root == q:
            return root

        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)

        if not left:
            return right
        elif not right:
            return left
        else:
            return root




from typing import List

class Solution2:
    def __init__(self):
        self.q_path = None
        self.p_path = None

    def dfs(self, node: 'TreeNode', p: 'TreeNode', q: 'TreeNode', path: List[int]):
        if(node is None):
            return
        path.append(node)

        if node.val == q.val:
            self.q_path = path.copy()
        if node.val == p.val:
            self.p_path = path.copy()
        
        self.dfs(node.left, p, q, path)
        self.dfs(node.right, p, q, path)
        path.pop()    
        
        return

    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        
        self.dfs(root, p, q, [])

        common = None
        for [node1, node2] in zip(self.q_path, self.p_path):
            if(node1 == node2):
                common = node1
            else:
                break
        return common