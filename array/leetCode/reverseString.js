String.prototype.reverse = function reverse() {
  if (this === "") return;
  let sub = this.substr(1)
  console.log(sub, this);
  return sub.reverse(sub) + this.charAt(0);
};
const a = "abcd".reverse();
console.log(a);
