class Solution:
    def countPrimes(self, n: int) -> int:
        if n <= 2:
            return 0
        arr = [1] * n
        sqrtn = math.floor(sqrt(n))
        arr[0] = 0
        arr[1] = 0
        for i in range(2, sqrtn+1):
            if arr[i] == 0:
                continue
            for num in range(i**2, n, i):
                arr[num] = 0
        return sum(arr)
