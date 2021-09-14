// Shifting Letters
// You are given a string s of lowercase English letters and an integer array shifts of the same length.

// Call the shift() of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').

// For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
// Now for each shifts[i] = x, we want to shift the first i + 1 letters of s, x times.

// Return the final string after all such shifts to s are applied.

// Input: s = "abc", shifts = [3,5,9]
// Output: "rpl"
// Explanation: We start with "abc".
// After shifting the first 1 letters of s by 3, we have "dbc".
// After shifting the first 2 letters of s by 5, we have "igc".
// After shifting the first 3 letters of s by 9, we have "rpl", the answer.

// Input: s = "aaa", shifts = [1,2,3]
// Output: "gfd"

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// shifts.length == s.length
// 0 <= shifts[i] <= 109

/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var shiftNtimes = function (s, n) {
  let index = alphabet.indexOf(s);
  let result = alphabet[(index + n) % 26];
  return result;
};
// shiftNtimes("a", 3);
var shiftingLetters = function (s, shifts) {
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    shifts[i] += shifts[i + 1] || 0;
  }
  for (let i = s.length - 1; i >= 0; i--) {
    result = shiftNtimes(s[i], shifts[i]) + result;
  }
  return result;
};

shiftingLetters("abc", [3, 5, 9]);
