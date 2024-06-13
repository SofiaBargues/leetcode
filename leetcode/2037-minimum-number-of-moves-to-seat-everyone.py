class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        seats.sort()
        students.sort()
        moves = 0
        for seat, stud in zip(seats, students):
            moves += abs(seat-stud)
        return moves