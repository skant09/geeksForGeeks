/**
 * @param {string} digits
 * @return {string[]}
 */
const letter = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};
function addLetters(existingLetterArray, newArray) {
  const newLetterArray = [];
  for (let i = 0; i < existingLetterArray.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      newLetterArray.push(existingLetterArray[i] + newArray[j]);
    }
  }
  return newLetterArray;
}
var letterCombinations = function(digits) {
  let ans = [''];
  for (let i = 0; i < digits.length; i++) {
    ans = addLetters(ans, letter[digits[i]]);
  }
  return ans;
};


const ans = letterCombinations("23");
console.log(ans);
