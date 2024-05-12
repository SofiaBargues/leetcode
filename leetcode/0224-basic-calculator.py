class Solution:
  def calculate(self, s: str) -> int:
    ans = 0
    num = 0
    sign = 1
    stack = [sign]  # stack[-1]: current env's sign

    for c in s:
      if c.isdigit():
        num = num * 10 + (ord(c) - ord('0'))
      elif c == '(':
        stack.append(sign)
      elif c == ')':
        stack.pop()
      elif c == '+' or c == '-':
        ans += sign * num
        sign = (1 if c == '+' else -1) * stack[-1]
        num = 0

    return ans + sign * num


class SolutionRaw:

    def operate(self, num1, operator, num2):
        if operator == '+':
            return num1+num2
        elif operator == '-':
            return num1-num2
        else:
            raise Error('unknown operator')

    def calculate(self, s: str) -> int:
        stack: List[Tuple[int, str]] = []
        prevNum = 0
        operator = ''

        i = 0
        while i< len(s):
            char = s[i]
            if char == '(':
                stack.append((prevNum, operator if operator else '+'))
                prevNum = 0
                operator = ''
            elif char == ')':
                savedNum, savedOper = stack.pop()
                # Operate with prevNum
                prevNum = self.operate(savedNum, savedOper, prevNum)
            elif char in ['+', '-']:
                operator = char
            elif char.isnumeric():   
                j = i+1
                numStr = s[i:j]
                while j <= len(s) and s[i:j].isnumeric():
                    numStr = s[i:j]
                    j+=1
                i += len(numStr) - 1
                readNum =  int(numStr)
                if not operator:
                    prevNum = readNum
                else:
                    prevNum = self.operate(prevNum, operator, readNum)

            # Else it's space ' '
            i+=1

        return prevNum