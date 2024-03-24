class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected) # 3
        parents = [i for i in range(n)] #[0, 1, 2]
        ranks  = [1] * n #[1, 1, 1]

        def getParent(node):
            parent = node
            while parent != parents[parent]:
                parent = parents[parent]
            return parent

        def union(n1, n2):
            p1 = getParent(n1)
            p2 = getParent(n2)

            if p1 == p2:
                # Already connected
                return 0
            
            # Disconencted
            if ranks[p1] >= ranks[p2]:
                parents[p2] = p1
                ranks[p1] += ranks[p2]
            else:
                parents[p1] = p2
                ranks[p2] += ranks[p1]
            return 1
        
        provinces = n
        for i in range(1, n):
            for j in range(0,i):
                if isConnected[i][j]:
                    provinces -= union(i,j)
        return provinces