class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
        n = len(position)
        
        position.sort()
        low = position[0]
        high = position[-1]
        max_separation = (high-low)//(m-1)

        def separationValid(sep: int) -> bool:
            balls = 0
            expected = 0
            for pos in position:
                if pos >=expected:
                    balls+=1
                    expected = pos+sep
            return balls >= m

        # BS try separations
        l = 0
        r = max_separation
        valid_sep = -1
        while l<=r:
            mid = (l+r)//2
            if separationValid(mid):
                valid_sep = mid
                l = mid+1
            else:
                r = mid-1
        return valid_sep
        