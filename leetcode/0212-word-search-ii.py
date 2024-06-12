from collections import defaultdict

class TrieNode:
    def __init__(self):
        self.children = {}
        self.isWord = False

    def addWord(self, word):
        curr = self
        for c in word:
            if c not in curr.children:
                curr.children[c] = TrieNode()
            curr = curr.children[c]
        curr.isWord = True


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        n = len(board)
        m = len(board[0])

        trie = TrieNode()
        for word in words:
            trie.addWord(word)

        seen = set()
        out = set()

        def dfs(x, y, node: TrieNode, path: str):
            if x<0 or y<0 or x >= n or y >= m:
                return
            if board[x][y] not in node.children:
                return
            if (x,y) in seen:
                return
            
            seen.add((x,y))
            char = board[x][y]
            new_node = node.children[char]
            new_path = path + char
            if new_node.isWord:
                out.add(new_path)


            # Check neighbours
            dfs(x+1, y, new_node, new_path)
            dfs(x, y+1, new_node, new_path)
            dfs(x-1, y, new_node, new_path)
            dfs(x, y-1, new_node, new_path)

            seen.remove((x,y))
            return

        for i in range(n):
            for j in range(m):
                seen = set()
                dfs(i, j, trie, '')


        return list(out)