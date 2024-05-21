# https://www.youtube.com/watch?v=q6IEA26hvXc
class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        n1 = len(nums1)
        n2 = len(nums2)
        # Ensure nums1 is the smaller array for simplicity
        if n1 > n2:
            n1, n2 = n2, n1
            nums1, nums2 = nums2, nums1

        total = n1 + n2
        half = (n1 + n2) // 2  # Calculate the left partition size

        low1, high1 = 0, n1 - 1
        while True:
            mid1 = (low1 + high1) // 2  # Calculate mid index for nums1
            mid2 = half - mid1 - 2  # Calculate mid index for nums2

            # Determine values of l1, l2, r1, and r2
            left1 = nums1[mid1] if mid1 >= 0 else float("-inf")
            left2 = nums2[mid2] if mid2 >= 0 else float("-inf")
            right1 = nums1[mid1 + 1] if mid1 + 1 < n1 else float("inf")
            right2 = nums2[mid2 + 1] if mid2 + 1 < n2 else float("inf")

            if left1 <= right2 and left2 <= right1:
                # The partition is correct, we found the median
                if total % 2:
                    return min(right1, right2)
                else:
                    return (max(left1, left2) + min(right1, right2)) / 2.0
            elif left1 > right2:
                # Move towards the left side of nums1
                high1 = mid1 - 1
            else:
                # Move towards the right side of nums1
                low1 = mid1 + 1

        return 0  # If the code reaches here, the input arrays were not sorted.
