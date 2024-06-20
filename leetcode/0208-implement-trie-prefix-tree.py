class TrieNode:
    def __init__(self):
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
            else:
                newNode = TrieNode()
                newNode.val = c
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

    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for c in prefix:
            if c in node.children:
                node = node.children[c]
            else:
                return False
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)