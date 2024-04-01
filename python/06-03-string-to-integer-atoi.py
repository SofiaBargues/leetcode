class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.lstrip()
        if(not len(s)):
            return 0
        
        isNegative = False
        if s[0] == '-':
            isNegative = True
            s = s[1:]
        elif s[0] == '+':
            s = s[1:]
        i = 0
        print(s)
        while i < len(s) and s[i].isnumeric(): 
            i+=1
            print(i)
        
        raw_number = int(s[0:i])  if i>0  else 0
        if isNegative:
            return -1 * min(raw_number, 2**31)
        else:
            return min(raw_number, 2**31  -1)
 
