// An n-bit gray code sequence is a sequence of 2n integers where:

// Every integer is in the inclusive range [0, 2n - 1],
// The first integer is 0,
// An integer appears no more than once in the sequence,
// The binary representation of every pair of adjacent integers differs by exactly one bit, and
// The binary representation of the first and last integers differs by exactly one bit.
// Given an integer n, return any valid n-bit gray code sequence.

// Input: n = 2
// Output: [0,1,3,2]
// Explanation:
// The binary representation of [0,1,3,2] is [00,01,11,10].
// - 00 and 01 differ by one bit
// - 01 and 11 differ by one bit
// - 11 and 10 differ by one bit
// - 10 and 00 differ by one bit
// [0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01].
// - 00 and 10 differ by one bit
// - 10 and 11 differ by one bit
// - 11 and 01 differ by one bit
// - 01 and 00 differ by one bit

/**
 * @param {number} n
 * @return {number[]}
 */

var _grayCode = function (n) {
  if (n < 1) throw new Error("n can't be less than 1");
  if (n === 1) return ["0", "1"];

  let solution = [];
  let initSolution = _grayCode(n - 1);
  let index = 0;

  for (let i = 0; i < initSolution.length; i += 2) {

    solution[index] = initSolution[i] + "1";
    solution[index + 1] = initSolution[i] + "0";
    solution[index + 2] = initSolution[i + 1] + "0";
    solution[index + 3] = initSolution[i + 1] + "1";
    index = index + 4;
  }
  console.table(solution);
  return solution;
};

var grayCode = function (n) {
  return _grayCode(n).map((i) => parseInt(i, 2));
};
var grayCode_5 = grayCode(6);
console.log(grayCode_5);
