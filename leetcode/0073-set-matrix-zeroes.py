class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        m = len(matrix[0])
        first_down = False
        first_right = False

        for i in range(n):
            for j in range(m):
                if matrix[i][j] == 0:
                    if i != 0:
                        matrix[i][0] = 'R'
                    else:
                        first_right = True
                    if j != 0:
                        matrix[0][j] = 'D'
                    else:
                        first_down = True
        
        print(matrix)
        for i in range(1, n):
            if matrix[i][0] == 'R':
                for j in range(m):
                    matrix[i][j] = 0
                
        for j in range(1, m):
            if matrix[0][j] == 'D':
                for i in range(n):
                    matrix[i][j] = 0

        if first_down:
            for i in range(n):
                matrix[i][0] = 0
        if first_right:
            for j in range(m):
                matrix[0][j] = 0
        