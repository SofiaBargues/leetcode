class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        if not pairs:
            return 0
        
        pairs.sort()
        chain_count = 1
        last_pair = pairs[0]
        for i in range(1, len(pairs)):
            new_pair = pairs[i]
            if last_pair[1] < new_pair[0]:
                # Attach to chain
                last_pair = new_pair
                chain_count += 1

            elif new_pair[1] < last_pair[1]:
                # Select segment with earliest end
                last_pair = new_pair
        return chain_count
            