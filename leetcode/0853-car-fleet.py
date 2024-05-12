class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pos_speed = sorted(zip(position, speed), reverse=True)

        fleet_count = 0
        prev_time = 0
        for pos, speed in pos_speed:
            time = (target - pos) / speed
            if time < prev_time:
                continue
            if math.isclose(time, prev_time):
                continue
            if time > prev_time:
                prev_time = time
                fleet_count += 1

        return fleet_count
