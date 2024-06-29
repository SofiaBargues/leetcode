from collections import defaultdict


class Solution:
    def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        # Adj list inv
        adj = defaultdict(list)
        for fro, to in edges:
            adj[fro].append(to)


        ans = [[] for _ in range(n)]    
        # Apply DFS from each node
        for i in range(n):
            self.dfs(i, i, ans, adj)
        return ans

    def dfs(self, start: int, curr: int, ans: List[List[int]], directChild: Dict[int, List[int]]) -> None:
        for ch in directChild[curr]:
            if not ans[ch] or ans[ch][-1] != start:
                ans[ch].append(start)
                self.dfs(start, ch, ans, directChild)


class SolutionUnoptimized:
    def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        # Adj list inv
        adj = defaultdict(list)
        for fro, to in edges:
            adj[to].append(fro)

        # DFS with memo of node -> return ancestors set
        memo = {}
        def dfs(node: int) -> Set[int]:
            if node in memo:
                return memo[node]
                
            ancestors = set(adj[node])
            for anc in adj[node]:
                ancestors |= dfs(anc)

            memo[node] = ancestors
            return ancestors
    
        # Apply DFS from each node
        out = []
        for i in range(n):
            out.append(sorted(list(dfs(i))))
        return out