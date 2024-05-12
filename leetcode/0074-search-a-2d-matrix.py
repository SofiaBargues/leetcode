class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if not len(matrix):
            return false
        n = len(matrix)
        m = len(matrix[0])

        def accessMatrix(i):
            return matrix[i // m][i % m]

        l = 0
        r = n * m - 1
        while l <= r:
            mid = (l + r) // 2
            val = accessMatrix(mid)
            if val == target:
                return True
            if val < target:
                l = mid + 1
            else:
                r = mid - 1
        return False
