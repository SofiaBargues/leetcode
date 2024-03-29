#!/bin/python3

import math
import os
import random
import re
import sys
from typing import List, Dict, Set
from collections import defaultdict

# Complete the findShortest function below.

#
# For the weighted graph, <name>:
#
# 1. The number of nodes is <name>_nodes.
# 2. The number of edges is <name>_edges.
# 3. An edge exists between <name>_from[i] to <name>_to[i].
#
#


def bfs(graph: Dict[int, List[int]], start: int, ids: List[int], val: int) -> int:
    level_list = set([start])
    distance = 0
    while len(level_list):
        next_level_nodes = set()
        seen = set()
        for node in level_list:
            # Check if color
            if node in seen:
                continue

            seen.add(node)

            if start != node and ids[node-1] == val:
                return distance
            # Add neighbours next_level_nodes
            for neighbour in graph[node]:
            # for neighbour in graph[node-1]:
                next_level_nodes.add(neighbour)

        level_list = next_level_nodes
        distance += 1
    return -1


def findShortest(
    graph_nodes: int, graph_from: List[int], graph_to: List[int], ids: List[int], val: int) -> int:
    # solve here

    adjList: Dict[int, List[int]] = defaultdict(list)
    for fro, to in zip(graph_from, graph_to):
        adjList[fro].append(to)
        adjList[to].append(fro)

    # { 1: [2], 2: [1, 4, 3], 4: [2], 3: [2]}

    filtered_nodes = [node for node in range(1, graph_nodes+1) if ids[node-1] == val]

    if len(filtered_nodes) < 2:
        return -1

    min_distance = graph_nodes
    for node in filtered_nodes:
        # BFS and find distance to node of val
        distance = bfs(adjList, node, ids, val)
        if distance != -1 and distance < min_distance:
            min_distance = distance

    return  min_distance # or weight


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    graph_nodes, graph_edges = map(int, input().split())

    graph_from = [0] * graph_edges
    graph_to = [0] * graph_edges

    for i in range(graph_edges):
        graph_from[i], graph_to[i] = map(int, input().split())

    ids = list(map(int, input().rstrip().split()))

    val = int(input())

    ans = findShortest(graph_nodes, graph_from, graph_to, ids, val)

    fptr.write(str(ans) + '\n')

    fptr.close()
