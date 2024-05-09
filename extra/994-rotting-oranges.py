class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        # Get all rotten
        if not len(grid):
            return 0

        rotten_frontier = []
        fresh_count = 0

        n = len(grid)
        m = len(grid[0])
        for i in range(n):
            for j in range(m):
                if grid[i][j] == 2:
                    rotten_frontier.append((i, j))
                if grid[i][j] == 1:
                    fresh_count += 1

        # seen set
        seen = set()

        minutes = 0
        # For all rotten, BFS propagating rottness
        while rotten_frontier and fresh_count > 0:
            minutes += 1
            new_frontier = []
            for rotten in rotten_frontier:
                i, j = rotten
                for ni, nj in [(i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)]:
                    if 0 <= ni < n and 0 <= nj < m and grid[ni][nj] == 1:
                        grid[ni][nj] = 2
                        fresh_count -= 1
                        new_frontier.append((ni, nj))
            rotten_frontier = new_frontier

        return minutes if fresh_count == 0 else -1
