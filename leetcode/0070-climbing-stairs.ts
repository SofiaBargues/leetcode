function climbStairs(n: number): number {
  if (n == 1) {
    return 1;
  }
  let prevprev = 1;
  let prev = 2;
  let curr = 2;
  for (let i = 2; i < n; i++) {
    curr = prev + prevprev;
    prevprev = prev;
    prev = curr;
  }
  return curr;
}
