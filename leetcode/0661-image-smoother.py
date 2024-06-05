DIRS = [(0, 1), (0, -1), (1, 0), (-1, 0), (1, 1), (-1, 1), (-1, -1), (1, -1)]


class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        if not len(img) or not len(img[0]):
            return [[]]
        smoothed = [[0] * len(img[0]) for _ in range(len(img))]
        for si in range(len(img)):
            for sj in range(len(img[0])):
                total = img[si][sj]
                count = 1
                for di, dj in DIRS:
                    i, j = si + di, sj + dj
                    if 0 <= i < len(img) and 0 <= j < len(img[0]):
                        total += img[i][j]
                        count += 1
                smoothed[si][sj] = total // count
        return smoothed
