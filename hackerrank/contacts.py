#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'contacts' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts 2D_STRING_ARRAY queries as parameter.
#

class TrieNode:
    def __init__(self):
        self.count=0
        self.val=None
        self.children={}
        self.isLeaf = False

class Trie:

    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for c in word:
            if c in node.children:
                node = node.children[c]
                node.count+=1
            else:
                newNode = TrieNode()
                newNode.val = c
                newNode.count+=1
                node.children[c] = newNode
                node = newNode
        node.isLeaf = True

    def search(self, word: str) -> bool:
        node = self.root
        for c in word:
            if c in node.children:
                node = node.children[c]
            else:
                return False
        return node.isLeaf

    def find(self, prefix: str) -> int:
        node = self.root
        for c in prefix:
            if c in node.children:
                node = node.children[c]
            else:
                return 0
        return node.count


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)


def contacts(queries):
    # Write your code here
    trie = Trie()
    out = []
    for query in queries:
        cmd, val = query
        if cmd == 'add':
            trie.insert(val)
        elif cmd == 'find':
            out.append(trie.find(val))
    return out
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    queries_rows = int(input().strip())

    queries = []

    for _ in range(queries_rows):
        queries.append(input().rstrip().split())

    result = contacts(queries)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
