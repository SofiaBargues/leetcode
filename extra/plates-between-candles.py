class Solution:
    def platesBetweenCandles(self, s: str, queries: List[List[int]]) -> List[int]:
        # Build candles prefix sum
        prefixCandles = []
        platesCount = 0
        for char in s:
            if char == '*':
                platesCount+=1
            prefixCandles.append(platesCount)

        # Build left candle
        leftCandles = []
        lastLeft = -1
        for i, char in enumerate(s):
            if char == '|':
                lastLeft = i
            leftCandles.append(lastLeft)

        # Build right candle
        rightCandles = []
        lastRight = -1
        for i in range(len(s)-1, -1, -1):
            char = s[i]
            if char == '|':
                lastRight = i
            rightCandles.append(lastRight)
        rightCandles.reverse()

        responses = []
        for l, r in queries:
            l = rightCandles[l]
            r = leftCandles[r]
            if l == -1 or r == -1:
                responses.append(0)
                continue
            diff = prefixCandles[r] - prefixCandles[l]
            responses.append(max(diff, 0))

        return responses

