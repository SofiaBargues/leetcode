class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        inorder_map = {val: index for index, val in enumerate(inorder)}

        def build(pre_start: int, pre_end: int, in_start: int):
            if pre_end <= pre_start:
                return None

            node = TreeNode(preorder[pre_start])
            mid = inorder_map[node.val]
            num_left = mid - in_start
            
            node.left = build(
                pre_start=pre_start + 1,
                pre_end=pre_start + 1 + num_left,
                in_start=in_start)
            node.right = build(
                pre_start=pre_start + 1 + num_left,
                pre_end=pre_end,
                in_start=mid + 1)
            return node

        return build(0, len(preorder), 0)


class SolutionEasy:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        # inorder_map = {val: index for index, val in enumerate(inorder)}
        if not preorder or not inorder:
            return None

        node = TreeNode(preorder[0])

        mid = inorder.index(node.val)

        node.left = self.buildTree(preorder[1: mid+1], inorder[:mid])
        node.right = self.buildTree(preorder[mid+1:], inorder[mid+1:])
        return node