from collections import defaultdict
from typing import List

class UnionFind:
    def __init__(self, n):
        self.parents = [i for i in range(n)]
        self.ranks = [1] * n

    def find(self, x):
        while x != self.parents[x]:
            self.parents[x] = self.parents[self.parents[x]]
            x =  self.parents[x]
        return x

    def union(self, x1, x2):
        p1, p2 = self.find(x1), self.find(x2)
        if p1 == p2:
            return False
        if(self.ranks[p1] > self.ranks[p2]):
            self.parents[p2] = p1
            self.ranks[p1] += self.ranks[p2]
        else:
            self.parents[p1] = p2
            self.ranks[p2] += self.ranks[p1]
        return True

class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        uf = UnionFind(len(accounts))
        emailsToIdx = {}

        for i, [_, *emails] in enumerate(accounts):
            for email in emails:
                if email in emailsToIdx:
                    # Found match
                    uf.union(i, emailsToIdx[email])
                else:
                    emailsToIdx[email] = i

        emailGroup = defaultdict(list) # Index of acc -> List of emails
        for email, i in emailsToIdx.items():
            leader = uf.find(i)
            emailGroup[leader].append(email)

        return [[accounts[i][0], *sorted(group)] for i, group in emailGroup.items()]