from collections import defaultdict, deque
class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        from collections import deque

        def connected(a: str, b: str) -> bool:
            k = 0
            for i in range(len(a)):
                if a[i] != b[i]:
                    k += 1
            return k == 1

        if endWord not in wordList:
            return []

        visited = set([beginWord])

        q = deque([beginWord])
        nodes = []
        find = False

        # moving forward
        while q and not find:
            nodes.append(q.copy())
            n = len(q)
            for _ in range(n):
                word = q.popleft()

                for item in wordList:
                    if item in visited:
                        continue

                    if not connected(word, item):
                        continue

                    if item == endWord:
                        find = True
                        break

                    visited.add(item)
                    q.append(item)

                if find:
                    break

        if not find:
            return []

        ans = []

        def backtracking(word, level: int, steps: List[str]):
            if word == beginWord:
                ans.append(steps[::-1])
                return

            if level < 0:
                return

            for item in nodes[level]:
                if connected(item, word):
                    steps.append(item)
                    backtracking(item, level-1, steps)
                    steps.pop()

        # move backward to construct paths
        backtracking(endWord, len(nodes)-1, [endWord])

        return ans

def getVariants(word):
    n = len(word)
    variants = []
    for i in range(n):
        variants.append(word[0:i] + '*' + word[i+1: n])
    return variants

class SolutionMoreMemory:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        adj = defaultdict(list)
        n = len(beginWord)

        for word in wordList:
            variants = getVariants(word)
            for variant in variants:
                adj[variant].append(word)

        # BFS to find distance
        queue = [[beginWord]]
        seen = set([beginWord])
        paths = []
        while queue:
            visited_layer = set()
            next_level = []
            for seq in queue: 
                words = seq
                word = words[-1]
                
                # Add neighbours
                for variant in getVariants(word):
                    for neighbour in adj[variant]:
                        if neighbour not in seen and neighbour != word:
                            if neighbour == endWord:
                                paths.append(seq + [neighbour])
                            else:
                                visited_layer.add(neighbour)
                                next_level.append(seq + [neighbour])
            if len(paths):
                return paths
            queue = next_level
            seen.update(visited_layer)

        return []
