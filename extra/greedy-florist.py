
# Complete the getMinimumCost function below.
def getMinimumCost(k, c):
    c.sort(reverse=True)  # time: nlogn # space: 1

    curr_total = 0
    num_bought_per_cust = 0

    for i, original_price in enumerate(c):
        if not i % k:
            # Increase the purchase count
            num_bought_per_cust+=1

        # Add to total the flower price
        curr_total += num_bought_per_cust * original_price

    # Return the final total
    return curr_total
