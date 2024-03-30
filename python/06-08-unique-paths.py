class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # Create the matrix to track paths
        matrix = [[0]*n]*m
        # Initialize cell in one
        matrix[0] = [1] *n

        # For all rows
        for i in range(1, m):
            # for all cols
            for j in range(n):
                # Set cell val to (cell left + cell right)
                top = matrix[i-1][j] if i-1>=0 else 0
                left = matrix[i][j-1] if j-1>=0 else 0
                matrix[i][j] = top + left

        # Return finish cell val
        return matrix[m-1][n-1]