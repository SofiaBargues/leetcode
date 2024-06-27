class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        c1, c2 = edges[0]
        if c1 in edges[1]:
            return c1
        else:
            return c2