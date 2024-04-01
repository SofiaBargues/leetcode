class Solution:
    def maxArea(self, height: List[int]) -> int:
        l = 0
        r = len(height)-1
        maxArea = 0
        while l<r:
            # calculate area and save
            currArea = (r-l)*min(height[l], height[r])
            maxArea = max(currArea, maxArea)
            # Move one pointer
            if height[l] > height[r]:
                r-=1
            else:
                l+=1

        return maxArea
