# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:

    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        q = deque([root])
        path = []

        while len(q):
            level_size = len(q)

            rightmost = None
            for _ in range(level_size):
                node = q.popleft()
                if node:
                    rightmost = node
                    q.append(node.left)
                    q.append(node.right)
            if rightmost:
                path.append(rightmost.val)

        return path

    def rightSideViewLevelArray(self, root: Optional[TreeNode]) -> List[int]:
        path: List[int] = []

        if root is None:
            return path

        node_at_level: List[TreeNode] = [root]

        while len(node_at_level):
            node_at_next_level = []
            for node in node_at_level:
                if node.left is not None:
                    node_at_next_level.append(node.left)
                if node.right is not None:
                    node_at_next_level.append(node.right)

            path.append(node_at_level[-1].val)

            node_at_level = node_at_next_level

        return path