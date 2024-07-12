class Solution:
    def maximumGain(self, s: str, x: int, y: int) -> int:
        total = 0
        # Subproblem (aaba) -> points
        sub_high, sub_low = ['ab', 'ba'] if x>y else ['ba', 'ab']
        # Remove high value
        s_1 = self.removeAllSubstr(s, sub_high)
        total += ((len(s)-len(s_1))/2) * max(x,y)
        s = s_1
        print(s_1)
        # Remove low value
        s_1 = self.removeAllSubstr(s, sub_low)
        total += ((len(s)-len(s_1))/2) * min(x,y)
        print(s_1)
        return round(total)


    def removeAllSubstr(self, s: str, substr: str):
        stack = []
        new_s = []
        for char in s:
            if char == substr[0]:
                stack.append(char)
                new_s.append(char)
            elif char == substr[1] and stack:
                stack.pop()
                new_s.pop()
            else:
                new_s.append(char)
                stack = []
        return "".join(new_s)
            
