import math


class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        row = [1]

        for i in range(1, rowIndex + 1):
            next_element = row[i - 1] * (rowIndex - i + 1) // i
            row.append(next_element)

        return row


class Solution:
    def binomialCoeficient(self, n: int, k: int) -> int:
        return math.floor(
            math.factorial(n) / (math.factorial(k) * math.factorial(n - k))
        )

    def getRow(self, rowIndex: int) -> List[int]:
        n = rowIndex
        row = []
        for k in range(n + 1):
            row.append(self.binomialCoeficient(n, k))
        return row
