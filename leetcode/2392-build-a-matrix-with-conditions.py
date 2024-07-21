from collections import defaultdict

class Solution:
    def buildMatrix(self, k: int, rowConditions: List[List[int]], colConditions: List[List[int]]) -> List[List[int]]:
        rowGraph = defaultdict(list)
        for fro, to in rowConditions:
            rowGraph[fro].append(to)
        colGraph = defaultdict(list)
        for fro, to in colConditions:
            colGraph[fro].append(to)

        rowOrder = self.topologicalSort(rowGraph, rowConditions, k)
        colOrder = self.topologicalSort(colGraph, colConditions, k)
        mat = [[0]*k for _ in range(k)]
        
        if not rowOrder or not colOrder:
            return []

        colIdx = {el: i for i, el in enumerate(colOrder)}
        rowIdx = {el: i for i, el in enumerate(rowOrder)}

        for i in range(1, k+1):
            mat[rowIdx[i]][colIdx[i]] = i

        return mat




    def topologicalSort(self, graph: Dict[int, List[int]], conditions: List[List[int]], k: int) -> List[int]:
        out = []

        inDegree = defaultdict(int)
        for _, to in conditions:
            inDegree[to]+=1

        queue = [i for i in range(1, k+1) if i not in inDegree]
        while queue:
            curr = queue.pop()
            out.append(curr)
            for nei in graph[curr]:
                inDegree[nei] -= 1
                if inDegree[nei] == 0:
                    queue.append(nei)
        return out if len(out) == k else []
