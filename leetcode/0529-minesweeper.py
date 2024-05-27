DIRECTIONS = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, 1], [-1, -1], [1, -1]]


class Solution:

    def get_adjacent_mines_count(self, board: List[List[str]], x: int, y: int) -> int:
        count = 0
        for dx, dy in DIRECTIONS:
            tx, ty = x + dx, y + dy
            if 0 <= tx < len(board) and 0 <= ty < len(board[0]):
                if board[tx][ty] == "M":
                    count += 1
        return count

    def updateBoard(self, board: List[List[str]], click: List[int]) -> List[List[str]]:
        if not len(board) or not len(board[0]):
            return Board

        n, m = len(board), len(board[0])
        x, y = click
        cell_val = board[x][y]
        if cell_val == "M":
            board[x][y] = "X"
            return board

        def dfs(x, y):
            if x < 0 or x >= n or y < 0 or y >= m:
                return
            if board[x][y] != "E":
                return

            # Cell val is E
            adj_count = self.get_adjacent_mines_count(board, x, y)
            if adj_count:
                board[x][y] = str(adj_count)
                return
            else:
                board[x][y] = "B"
                # Recurse
                for dx, dy in DIRECTIONS:
                    tx, ty = x + dx, y + dy
                    dfs(tx, ty)

        dfs(x, y)
        return board
