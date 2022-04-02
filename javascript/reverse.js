/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const negative = x < 0 ? true : false;
  let number = Math.abs(x);
//   if ((number > 2) ^ 64) return 0;
  let reverse = 0;
  while (number > 0) {
    reverse = reverse * 10 + (number % 10);
    number = (number - (number % 10)) / 10;
  }
  if (negative) return reverse * -1;
  return reverse;
};
console.log(reverse(123));
