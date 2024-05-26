class Solution:
    def canArrange(self, arr: List[int], k: int) -> bool:
        # Algo:
        # 1. build arr count to store remainder counts
        # 2. check remainder in 0 i s even, return False if not
        # 3. if k is even, check remainder k/2 is even, return False if not
        # 4. end_range = (k-1)//2
        # 5. for i in range(1, end_range+1):
        #    a. if count[i] != count[k-i]: return False
        # 6. return True
        if len(arr) % 2 != 0:
            return False
        count = [0] * k
        for num in arr:
            count[num % k] += 1

        if k % 2 == 0 and count[k // 2] % 2 != 0:
            return False
        end_range = (k - 1) // 2
        for i in range(1, end_range + 1):
            if count[i] != count[k - i]:
                return False
        return True
