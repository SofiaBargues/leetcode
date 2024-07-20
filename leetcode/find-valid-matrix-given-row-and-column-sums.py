class Solution:
    def restoreMatrix(self, rowSum: List[int], colSum: List[int]) -> List[List[int]]:
        n = len(rowSum)
        m = len(colSum)
        mat = [[0] * m for _ in range(n)]
        for i in range(n):
            for j in range(m):
                val = min(rowSum[i], colSum[j])
                if val == 0:
                    continue
                mat[i][j] = val
                rowSum[i] -= val
                colSum[j] -= val
        return mat
