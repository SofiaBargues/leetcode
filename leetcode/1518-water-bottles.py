class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        drank = numBottles
        while numBottles >= numExchange:
            exchanged = numBottles // numExchange
            numBottles %= numExchange
            drank += exchanged
            numBottles += exchanged
        return drank