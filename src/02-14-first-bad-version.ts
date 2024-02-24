/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
          if (n === 1) return isBadVersion(n);

          let low = 1;
          let high = n;

          while (low <= high) {
              const mid = Math.floor((low + high) / 2)
              const ans = isBadVersion(mid)
              console.log({low, high, mid, ans})
              if (ans) {
                  high = mid - 1
              } else {
                  low = mid + 1
              }
          }
          return low
      };
  };