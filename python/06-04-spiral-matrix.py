class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if(len(matrix) == 0):
            return []
        l  = 0
        r = len(matrix[0])-1
        u = 0
        d = len(matrix)-1

        spiral = []
        direction = 'LTR'
        while l<=r and u<=d:
            print(spiral)
            if direction == 'LTR':
                for i in range(l, r+1):
                    spiral.append(matrix[u][i])
                u+=1
                direction = 'UTD'
            elif direction == 'RTL':
                for i in range(r, l-1, -1):
                    spiral.append(matrix[d][i])
                d-=1
                direction = 'DTU'
            elif direction == 'UTD':
                for i in range(u, d+1):
                    spiral.append(matrix[i][r])
                r-=1
                direction = 'RTL'
            elif direction == 'DTU':
                for i in range(d, u-1, -1):
                    spiral.append(matrix[i][l])
                l+=1
                direction = 'LTR'
        return spiral