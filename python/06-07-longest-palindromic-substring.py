
class Solution:
    def expandPalindrome(self, s: str, largest: str, l: bool, r: bool) -> str:
        while  l>=0 and r<len(s) and s[l] == s[r]:
            if r+1-l > len(largest):
                largest = s[l:r+1]
            l-=1
            r+=1
        return largest

    def longestPalindrome(self, s: str) -> str:
        largest = ''
        for i in range(len(s)):
            largest = self.expandPalindrome(s, largest, i, i)
            largest = self.expandPalindrome(s, largest, i, i+1)
        return largest