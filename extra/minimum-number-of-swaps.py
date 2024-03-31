def minimumSwaps(arr):
    # init
    cyclesCount = 0

    def swap(i, j):
        arr[i], arr[j] = arr[j], arr[i]

    print(arr)
    for i in range(len(arr)):
        # While the current element is not in its correct position
        while arr[i] != i + 1:
            # swap the current element with the element at its correct position
            swap(i, arr[i] - 1)
            cyclesCount += 1  # increment the count of swaps

    return cyclesCount
