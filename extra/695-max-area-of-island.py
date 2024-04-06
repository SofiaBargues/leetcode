directions = [
    [1, 0],
    [-1, 0],
    [0, -1], 
    [0, 1],
]

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        if not grid:
            return 0

        n = len(grid)
        m = len(grid[0])
        
        def dfs(pos_x: int, pos_y: int):
            if pos_x >= n or pos_x < 0 or pos_y >= m or pos_y < 0:
                return 0
            
            if grid[pos_x][pos_y] == 0:
                return 0
            
            grid[pos_x][pos_y]=0
            area = 1

            for delta_x, delta_y in directions: 
                area += dfs(pos_x+delta_x, pos_y+delta_y)

            return area
            

        max_area = 0

        for i in range(n):
            for j in range(m):
                if grid[i][j]:
                    area = dfs(i, j)
                    max_area = max(max_area, area)
        return max_area

    