function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));

  if (intervals.length == 0) {
    return [];
  }

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const intA = result.pop()!;
    const intB = intervals[i];

    if (intB[0] <= intA[1]) {
      result.push([Math.min(intA[0], intB[0]), Math.max(intA[1], intB[1])]);
    } else {
      result.push(intA, intB);
    }
  }
  return result;
}
