directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
]

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        if not board:
            return not word
        n = len(board)
        m = len(board[0])

        seen: List[List[bool]] = [[False]*m for _ in range(n)]

        def dfs(word, x, y):
            if not word:
                return True
            if x<0 or y<0 or x>=n or y>=m:
                return False
            if seen[x][y]:
                return False 
            if board[x][y] != word[0]:
                return False

            seen[x][y] = True

            remaining_word = word[1:]
            for direction in directions:
                dx, dy = direction
                if dfs(remaining_word, x+dx, y+dy):
                    return True

            seen[x][y] = False
            return False


        starting_points = []
        for i, row in enumerate(board):
            for j, cell in enumerate(row):
                if cell == word[0]:
                    starting_points.append([i,j])

        for point in starting_points:
            x, y = point
            if dfs(word, x, y):
                return True
        return False