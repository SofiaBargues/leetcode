class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        if not len(obstacleGrid) or not len(obstacleGrid[0]):
            return 0
        if obstacleGrid[0][0] == 1:
            return 0

        n, m = len(obstacleGrid), len(obstacleGrid[0])
        paths = [[0] * m for _ in range(n)]
        paths[0][0] = 1

        # Handle border conditions
        for c in range(1, m):
            if obstacleGrid[0][c] == 1:
                break
            paths[0][c] = 1
        for r in range(1, n):
            if obstacleGrid[r][0] == 1:
                break
            paths[r][0] = 1

        for r in range(1, n):
            for c in range(1, m):
                if obstacleGrid[r][c] == 1:
                    continue
                paths[r][c] = paths[r - 1][c] + paths[r][c - 1]
        return paths[n - 1][m - 1]
