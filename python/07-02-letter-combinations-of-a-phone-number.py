num_to_letters = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
}

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        # Create combinations
        combinations: List[str] = [""]

        # iterate over digits in digits
        # For each digit
        # O(n)
        for digit in digits:
            letters = num_to_letters[digit]
            new_combinations = []
            # Iterate over letters and add to combinations
            # O(1)
            for letter in letters:
                new_combinations += [partial + letter for partial in combinations]

            combinations = new_combinations

        # Return combinations
        # time and space # O(4^n)
        return combinations