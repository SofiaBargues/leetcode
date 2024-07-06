class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        loop_period = (n-1)*2
        time = time % (loop_period)
        if time >= n:
            back = time - (n-1)
            return n-back 
        else:
            return 1 + time
