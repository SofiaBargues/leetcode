from collections import deque
dirs = [
    (0, 1),
    (0, -1),
    (1, 0),
    (-1, 0),
]

class Solution:
    def cutOffTree(self, forest: List[List[int]]) -> int:
        # Find and sort trees
        # For each tree in sorted, find it and get its distance
        #       BFS tracking distance
        #       Add distance
        # return total distancve
        n = len(forest)
        m = len(forest[0])

        def bfs(tree_height: int, x: int, y: int):
            seen = set()
            seen.add((x, y))
            queue = deque([(x, y, 0)])
            while queue:
                i, j, dist = queue.popleft()

                if forest[i][j] == tree_height:
                    return dist

                for di, dj in dirs:
                    ni = di+i
                    nj = dj+j
                    if 0 <= ni < n and 0 <= nj < m and forest[ni][nj] > 0 and (ni,nj) not in seen:
                        seen.add((ni, nj))
                        queue.append((ni, nj, dist+1))

            return -1


        trees: List[Tupple[int, Tupple[int, int]]] = []
        for i in range(n):
            for j in range(m):
                cell = forest[i][j]
                if cell > 1:
                    trees.append((cell, (i, j)))
        trees.sort()
        start_pos = (0, 0)
        total_distance = 0
        for tree_height, tree_pos in trees:
            x, y = start_pos
            dist = bfs(tree_height, x, y)
            if dist == -1:
                return -1
            total_distance += dist
            start_pos = tree_pos
        return total_distance

