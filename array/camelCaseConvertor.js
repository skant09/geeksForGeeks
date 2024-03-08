var camelize = function(str) {
  const stringArray = str.toLowerCase().split("");
  const str1 = [];
  let previousNonAlphaNumeric = false;

  for (let index = 0; index < stringArray.length; index++) {
    const element = stringArray[index];
    if (parseInt(element, 32).toString() === "NaN") {
      previousNonAlphaNumeric = true;
    } else if (parseInt(element, 32).toString() !== "NaN") {
      if (previousNonAlphaNumeric) {
        str1.push(element.toUpperCase());
        previousNonAlphaNumeric = false;
      } else {
        str1.push(element);
      }
    }
  }
  console.log(str1.join(""));
  return str1.join("");
};

const word = "abc__Abc-abc-Abc";
const answer = "abcAbcAbcAbc";
console.log(camelize(word) === answer);
