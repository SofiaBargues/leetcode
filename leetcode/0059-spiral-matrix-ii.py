class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        count = 1
        end = n**2
        col = 0
        row = 0
        dire = "LTR"
        l = 0
        t = 0
        r = n - 1
        b = n - 1
        mat = [[0] * n for _ in range(n)]
        while count <= end:
            # print(row, col, dire, l, r, t, b)

            mat[row][col] = count
            # Advance
            if dire == "LTR":
                if col == r:
                    dire = "TTB"
                    row += 1
                    t += 1
                else:
                    col += 1
            elif dire == "RTL":
                if col == l:
                    dire = "BTT"
                    row -= 1
                    b -= 1
                else:
                    col -= 1
            elif dire == "TTB":
                if row == b:
                    dire = "RTL"
                    col -= 1
                    r -= 1
                else:
                    row += 1
            elif dire == "BTT":
                if row == t:
                    dire = "LTR"
                    col += 1
                    l += 1
                else:
                    row -= 1
            count += 1
        return mat
