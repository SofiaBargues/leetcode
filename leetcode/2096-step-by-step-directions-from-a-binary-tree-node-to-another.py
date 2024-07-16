# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getDirections(self, root: Optional[TreeNode], startValue: int, destValue: int) -> str:
        s = str(startValue)
        d = str(destValue)

        def dfs(node: Optional[TreeNode], startValue: int, destValue: int) -> Tuple[str, List[str]]:
            # IF no node, return ""
            if not node:
                # print("leaf")
                return ("", [])

            # Go left and right
            l_status, left = dfs(node.left, startValue, destValue)
            if l_status == "C":
                # print("full left", left)
                return l_status, left
            r_status, right = dfs(node.right, startValue, destValue)
            if r_status == "C":
                # print("full right",right)
                return r_status, right


            start = []
            s_status = ""
            dest = []
            d_status = ""
            if l_status == "S":
                left.append("U")
                start = left
                s_status = "S"
            elif r_status == "S":
                right.append("U")
                start = right
                s_status = "S"
            elif node.val == startValue:
                start = []
                s_status = "S"
            
            if l_status == "D":
                left.append("L")
                dest = left
                d_status = "D"
            elif r_status == "D":
                right.append("R")
                dest = right
                d_status = "D"
            elif node.val == destValue:
                dest = []
                d_status = "D"

            # If both start with S,D then found pivot
            if s_status and d_status:
                # print("sum", start + dest)
                return ("C", start + dest[::-1])
            elif s_status:
                return (s_status, start)
            elif d_status:
                return (d_status, dest)
            return( "", [])

        _, res = dfs(root, startValue, destValue)
        return "".join(res)
        
        