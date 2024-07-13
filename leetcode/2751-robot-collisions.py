class Solution:
    def survivedRobotsHealths(self, positions: List[int], healths: List[int], directions: str) -> List[int]:
        idx_pos = {pos: idx for idx, pos in enumerate(positions)}
        robots = sorted(zip(positions, healths, directions))
        
        stack = []
        out = []

        for pos, health, direction in robots:
            if direction == 'R':
                stack.append((idx_pos[pos], health))
            elif direction == 'L':
                if not len(stack):
                    out.append(( idx_pos[pos], health))
                else:
                    while stack:
                        r_idx, r_health = stack.pop()
                        if r_health > health:
                            stack.append((r_idx, r_health - 1))
                            break
                        elif r_health == health:
                            break
                        elif not len(stack):
                            # left won to everyone
                            out.append((idx_pos[pos], health-1))
                        else:
                            health = health-1
        out.extend(stack)
        out.sort()

        return [health for idx, health in out]
            