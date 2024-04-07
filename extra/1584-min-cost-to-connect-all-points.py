from collections import defaultdict
import heapq

class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        
        adjList: Dict[int, List[Tuple[int, int]]] = defaultdict(list)
        for i, point in enumerate(points):
            for j in range(i+1, len(points)):
                other = points[j]
                dist = abs(point[0]-other[0]) + abs(point[1]-other[1]) 
                adjList[i].append((dist, j))
                adjList[j].append((dist, i))


        seen: Set[int] = set([0])
        cost = 0
        dist_heap = []
        curr = 0
        while len(seen) < len(points):
            for dist, node in adjList[curr]:
                if node in seen:
                    continue
                heapq.heappush(dist_heap, (dist, node))

            closest = None
            while closest is None:
                candidate = heapq.heappop(dist_heap)
                if candidate[1] not in seen:
                    closest = candidate
            
            cost += candidate[0] 
            curr = candidate[1]
            seen.add(curr)


        return cost