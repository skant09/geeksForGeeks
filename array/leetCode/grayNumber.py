#  An n-bit gray code sequence is a sequence of 2n integers where:

# Every integer is in the inclusive range [0, 2n - 1],
# The first integer is 0,
# An integer appears no more than once in the sequence,
# The binary representation of every pair of adjacent integers differs by exactly one bit, and
# The binary representation of the first and last integers differs by exactly one bit.
# Given an integer n, return any valid n-bit gray code sequence.

# Input: n = 2
# Output: [0,1,3,2]
# Explanation:
# The binary representation of [0,1,3,2] is [00,01,11,10].
# - 00 and 01 differ by one bit
# - 01 and 11 differ by one bit
# - 11 and 10 differ by one bit
# - 10 and 00 differ by one bit
# [0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01].
# - 00 and 10 differ by one bit
# - 10 and 11 differ by one bit
# - 11 and 01 differ by one bit
# - 01 and 00 differ by one bit
from numbers import Number
"""[summary]

Returns:

    [number[]]: [description]
"""

def _grayCode(n):
    if type(n)!= int:
        raise("{} is not a number", n);
        
    if (n == 1) :
      return ["0", "1"];

    solution = [];
    initSolution = _grayCode(n - 1);

    for i in range(len(initSolution)):
        if(i%2 == 0):
            solution.append(initSolution[i]+ "0");
            solution.append(initSolution[i]+ "1");
        else:
            solution.append(initSolution[i] + "1");
            solution.append(initSolution[i] + "0");

    return solution;

def grayCode(n):
    solution = []
    gray = _grayCode(n)
    print("gray {}", gray)
    for i in range(len(gray)):
        value = int(gray[i], 2);
        solution.append(value)
    
    print(solution)

grayCode(10);