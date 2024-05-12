

class SolutionDPMatrix:
    def change(self, amount: int, coins: List[int]) -> int:
        n = len(coins)
        prev = [0]* (amount+1)
        curr = [0]* (amount+1)

        # Combinatations for zero
        curr[0] = 1

        # Iterate over coins
        for i in range(1, n+1):
            for j in range(1, amount+1):
                coin = coins[i-1]
                if j-coin >= 0:
                    curr[j] = curr[j-coin] + prev[j]
                else:
                    curr[j] = prev[j]
            prev = curr

        return curr[amount]