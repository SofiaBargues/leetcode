class Solution:
    def searchMatrixBinarySearch(self, matrix: List[List[int]], target: int) -> bool:
        for i in range(len(matrix)):
            l = 0
            r = len(matrix[i])-1
            while l <= r:
                m = (l+r) // 2
                val = matrix[i][m] 
                if val == target:
                    return True
                if val < target:
                    l = m+1
                else:
                    r = m-1

        return False