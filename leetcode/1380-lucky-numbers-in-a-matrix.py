class Solution:
    def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:
        n = len(matrix)
        m = len(matrix[0])
        columnMaxs = [0]*m
        rowMins = [float('inf')]*n
        for i in range(n):
            for j in range(m):
                curr = matrix[i][j]
                rowMins[i] = min(rowMins[i], curr)
                columnMaxs[j] = max(columnMaxs[j], curr)
        lucky = []
        for i in range(n):
            for j in range(m):
                curr = matrix[i][j]
                if curr <= rowMins[i] and curr >= columnMaxs[j]:
                    lucky.append(curr)
        return lucky
