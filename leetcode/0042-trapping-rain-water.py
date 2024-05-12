class Solution:
    def trap(self, height: List[int]) -> int:
        l = 0
        r = len(height)-1
        maxL = height[l]
        maxR = height[r]
        water = 0

        while l < r:
            if maxL <= maxR:
                l+=1
                waterDelta = min(maxL, maxR) - height[l]
                water += max(waterDelta, 0)
                maxL = max(height[l], maxL)
            else:
                r-=1
                waterDelta = min(maxL, maxR) - height[r]
                water += max(waterDelta, 0)
                maxR = max(height[r], maxR)
        return water