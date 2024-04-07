from collections import Counter, defaultdict

#
# Complete the 'isValid' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#


def isValid(s):
    # Write your code here
    counter = Counter(s)

    freq_count = defaultdict(lambda: 0)

    for val in counter.values():
        freq_count[val] += 1

    if len(freq_count) == 1:
        return "YES"
    if len(freq_count) > 2:
        return "NO"

    # If there are exactly 2 frequencies
    # Check if removing one character makes it a valid string
    freq_vals = list(freq_count.keys())
    freq_counts = list(freq_count.values())
    if (
        freq_counts[0] == 1 and (freq_vals[0] == 1 or freq_vals[0] == freq_vals[1] + 1)
    ) or (
        freq_counts[1] == 1 and (freq_vals[1] == 1 or freq_vals[1] == freq_vals[0] + 1)
    ):
        return "YES"
    return "NO"
