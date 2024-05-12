function combinationSum(candidates: number[], target: number): number[][] {
  const queue: [number[], number, number][] = [];
  const combinations: number[][] = [];

  const sortedCandidates = [...candidates].sort((a, b) => b - a);

  queue.push([[], 0, 0]);

  while (queue.length) {
    const [currCombination, currSum, latest] = queue.pop()!;

    sortedCandidates
      .filter((cand) => cand >= latest)
      .forEach((cand) => {
        const currCount = currSum + cand;
        if (currCount === target) {
          combinations.push(currCombination.concat([cand]));
        } else if (currCount < target) {
          queue.push([currCombination.concat([cand]), currCount, cand]);
        }
      });
  }
  return combinations;
}
