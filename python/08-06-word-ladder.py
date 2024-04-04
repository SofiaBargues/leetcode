from typing import List, Dict
from collections import defaultdict, deque
class Solution:

    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if not endWord in wordList:
            return 0
        wordList.append(beginWord)

        graph: Dict[str, List[str]] = defaultdict(list)
        for word in wordList:
            for j in range(len(word)):
                pattern = word[:j] + "*" + word[j + 1 :]
                graph[pattern].append(word)

        # BFS counting distance
        seen = set()
        queue = deque([(beginWord, 0)])
        seen.add(beginWord)

        while len(queue):
            word, dist = queue.popleft()

            # return distance if found
            if word == endWord:
                return dist+1
            # neighoburs
            for j in range(len(word)):
                pattern = word[:j] + "*" + word[j + 1 :]
                for neighbour in graph[pattern]:
                    if neighbour not in seen:
                        seen.add(neighbour)
                        queue.append((neighbour, dist+1))


        # return 0 if not found
        return 0