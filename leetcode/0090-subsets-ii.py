class SolutionBacktrack:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        subsets: List[List[int]] = []

        stack: List[int] = []

        def backtrack(i: int):
            if i == len(nums):
                subsets.append(stack.copy())
                return

            stack.append(nums[i])
            backtrack(i+1)
            stack.pop()

            # Skip not including of duplicates
            while i < len(nums)-1 and nums[i] == nums[i+1]:
                i+=1

            backtrack(i+1)

        backtrack(0)
        return subsets



class SolutionArrays:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        subsets: List[List[int]] = [[]]
        seen: Set[str] = set([str([])])

        for num in nums:
            new_subsets = []
            for element in subsets:
                new_el = element + [num]
                new_el_str = str(new_el)
                if new_el_str in seen:
                    continue
                seen.add(new_el_str)
                new_subsets.append(new_el)
            subsets.extend(new_subsets)

        return subsets