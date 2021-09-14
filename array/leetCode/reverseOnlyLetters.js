// Reverse Only Letters
// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

// Input: s = "ab-cd"
// Output: "dc-ba"

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

// Constraints:

// 1 <= s.length <= 100
// s consists of characters with ASCII values in the range [33, 122].
// s does not contain '\"' or '\\'.

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (str) {
  let solution = str.split("");
  let leftIndex = 0;
  let rightIndex = str.length - 1;
  while (leftIndex <= rightIndex) {
    if (solution[leftIndex].toLowerCase() === solution[leftIndex].toUpperCase()) {
      leftIndex++;
      continue;
    }
    if (solution[rightIndex].toLowerCase() === solution[rightIndex].toUpperCase()) {
      rightIndex--;
      continue;
    }
    let temp = solution[leftIndex];
    solution[leftIndex] = solution[rightIndex];
    solution[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
  return solution.join("");
};

const solution = reverseOnlyLetters("a-bC-dEf-ghIj");
console.log(solution);
