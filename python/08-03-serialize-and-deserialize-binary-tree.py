# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root):
        # Initialize an empty list to store serialized node values
        ans = []

        # Define a depth-first search (DFS) function to serialize the tree
        def DFS(root):
            # Base case: If the current node is None, append "N" to represent null node
            if not root:
                ans.append("N")
                return

            # Append the value of the current node to the list
            ans.append(str(root.val))
            
            # Recursively serialize left and right subtrees
            DFS(root.left)
            DFS(root.right)

        # Call the DFS function to serialize the tree
        DFS(root)
        
        # Join the list elements into a string separated by commas and return
        return ",".join(ans)        

    def deserialize(self, data):
        # Split the serialized string into a list of node values
        value = data.split(",")
        
        # Initialize index to keep track of current position in the list
        self.index = 0

        # Define a DFS function to reconstruct the tree from serialized data
        def DFS():
            # If the current value is "N", indicating a null node, return None
            if value[self.index] == "N":
                self.index += 1
                return None

            # Create a new TreeNode with the current value
            root = TreeNode(int(value[self.index]))
            self.index += 1
            
            # Recursively construct left and right subtrees
            root.left = DFS()
            root.right = DFS()
            
            return root

        # Call the DFS function to deserialize the tree and return the root
        return DFS()                               

from collections import deque

class CodecBFS:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        serialized: List[int | None] = []

        def bfs(root: TreeNode):
            if not root:
                return 
                
            queue = deque([root])

            while len(queue):
                node = queue.popleft()

                serialized.append(str(node.val) if node else "null")

                if node:
                    queue.append(node.left)
                    queue.append(node.right)
        bfs(root)
        return ",".join(serialized)




    def deserialize(self, data: str):
        """Decodes your encoded data to tree.

        :type data: str
        :rtype: TreeNode
        """
        if not data:
            return None

        comma_separated = data.split(",")
        values = [int(val) if val != 'null' else None for val in comma_separated]

        serialized = deque(values)

        root: TreeNode = TreeNode(serialized.popleft())

        def bfs(serialized):

            queue = deque([root])

            while len(queue):
                node = queue.popleft()

                if node:
                    left_val = serialized.popleft()
                    right_val = serialized.popleft()

                    node.left = TreeNode(left_val) if left_val is not None else None
                    node.right = TreeNode(right_val) if right_val is not None else None

                    queue.append(node.left)
                    queue.append(node.right)

        bfs(serialized)
        return root

# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))