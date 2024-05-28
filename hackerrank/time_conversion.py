#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#


def timeConversion(s):
    # convert from 12:00:00AM to 00:00:00
    is_AM = s[-2:] == "AM"
    is_12 = s[0:2] == "12"
    if is_AM and is_12:
        return (f"{(int(s[0:2])-12):02d}") + s[2:-2]
    if not is_AM and is_12:
        return (f"{(int(s[0:2])):02d}") + s[2:-2]
    if not is_AM:
        return (f"{(int(s[0:2])+12):02d}") + s[2:-2]
    else:
        return s[0:-2]


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    s = input()

    result = timeConversion(s)

    fptr.write(result + "\n")

    fptr.close()
