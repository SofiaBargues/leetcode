class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        total_node_count = n
        
        if total_node_count == 1:
            # Quick response for one node tree
            return [0]
        
        # build adjacency matrix
        adj_matrix = defaultdict( set )
        
        for src_node, dst_node in edges:
            adj_matrix[src_node].add( dst_node )
            adj_matrix[dst_node].add( src_node )
            
            
        # get leaves node whose degree is 1
        leave_nodes = [ node for node in adj_matrix if len(adj_matrix[node]) == 1 ]
        
        
        # keep doing leave nodes removal until total node count is smaller or equal to 2
        while total_node_count > 2:
            new_leave_nodes = []
            for node in leave_nodes:
                total_node_count-=1
            
                for neighbour in adj_matrix[node]:
                    adj_matrix[neighbour].remove(node)
                    if len(adj_matrix[neighbour]) == 1:
                        new_leave_nodes.append(neighbour)
                adj_matrix.pop(node)

            leave_nodes = new_leave_nodes

        return [node for node in adj_matrix]