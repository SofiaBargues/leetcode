class UnionFind:
    def __init__(self, n):
        self.count = n
        self.parent = list(range(n))
        self.rank = [1]*n

    def find(self, p):
        while self.parent[p] != p:
            p = self.parent[p]
        return p

    def union(self, p, q):
        p_parent = self.find(p)
        q_parent = self.find(q)
        if q_parent == p_parent:
            # Already joined
            return False
        else:
            # Count one connection
            self.count-=1
            if self.rank[p_parent] > self.rank[q_parent]:
                self.parent[q_parent] = p_parent
                self.rank[p_parent] += self.rank[q_parent]
            else:
                self.parent[p_parent] = q_parent
                self.rank[q_parent] += self.rank[p_parent]
            return True


class Solution:
    def maxNumEdgesToRemove(self, n: int, edges: List[List[int]]) -> int:
        # Sort to prioritize Type 3
        edges.sort(reverse=True)
        
        # Make an union find for bob and one for alice
        uf_alice = UnionFind(n)
        uf_bob = UnionFind(n)
        
        used_edges = 0
        for e_type, start, end in edges:
            used = False
            if e_type in [3, 1] and uf_alice.union(start-1,  end-1):
                used = True
            if e_type in [3, 2] and uf_bob.union(start-1, end-1):
                used = True
            if used:
                used_edges+=1

        possible = uf_alice.count == 1 and uf_bob.count == 1
        return len(edges) - used_edges if possible else -1class UnionFind:
    def __init__(self, n):
        self.count = n
        self.parent = list(range(n))
        self.rank = [1]*n

    def find(self, p):
        while self.parent[p] != p:
            p = self.parent[p]
        return p

    def union(self, p, q):
        p_parent = self.find(p)
        q_parent = self.find(q)
        if q_parent == p_parent:
            # Already joined
            return False
        else:
            # Count one connection
            self.count-=1
            if self.rank[p_parent] > self.rank[q_parent]:
                self.parent[q_parent] = p_parent
                self.rank[p_parent] += self.rank[q_parent]
            else:
                self.parent[p_parent] = q_parent
                self.rank[q_parent] += self.rank[p_parent]
            return True


class Solution:
    def maxNumEdgesToRemove(self, n: int, edges: List[List[int]]) -> int:
        # Sort to prioritize Type 3
        edges.sort(reverse=True)
        
        # Make an union find for bob and one for alice
        uf_alice = UnionFind(n)
        uf_bob = UnionFind(n)
        
        used_edges = 0
        for e_type, start, end in edges:
            used = False
            if e_type in [3, 1] and uf_alice.union(start-1,  end-1):
                used = True
            if e_type in [3, 2] and uf_bob.union(start-1, end-1):
                used = True
            if used:
                used_edges+=1

        possible = uf_alice.count == 1 and uf_bob.count == 1
        return len(edges) - used_edges if possible else -1