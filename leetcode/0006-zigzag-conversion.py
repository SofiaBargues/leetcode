class Solution:
    def convert(self, s: str, numRows: int) -> str:
        out = []

        period = max(2 * numRows - 2, numRows)
        for i in range(numRows):
            pos1 = i
            if i == 0 or i == numRows - 1:
                while pos1 < len(s):
                    out.append(s[pos1])
                    pos1 += period
            else:
                pos2 = period - i
                side = "L"
                while pos1 < len(s) or pos2 < len(s):
                    if side == "L":
                        out.append(s[pos1])
                        pos1 += period
                        side = "R"
                    elif side == "R":
                        out.append(s[pos2])
                        pos2 += period
                        side = "L"
        return "".join(out)
