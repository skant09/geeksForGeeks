var NumArray = function(nums) {
  this.nums = nums;
  this.n = nums.length;
  this.fenwickTree = new Array(this.n + 1).fill(0);
  nums.forEach((num, index) => this.init(index, num));
};

NumArray.prototype.init = function(index, val) {
  let j = index + 1;
  while (j <= this.n) {
    this.fenwickTree[j] += val;
    j += this.lsb(j);
  }
//   console.log('init', index);
//   console.log(this.fenwickTree);
};

NumArray.prototype.lsb = function(index) {
  console.log('lsb', index, index & ~(index - 1));
  return index & ~(index - 1);
};

NumArray.prototype.update = function(index, val) {
  const diff = val - this.nums[index];
  this.nums[index] = val;
  this.init(index, diff);
};

NumArray.prototype.getSum = function(index) {
  let j = index + 1;
  let sum = 0;

  while (j > 0) {
    sum += this.fenwickTree[j];
    j -= this.lsb(j);
  }

  return sum;
};

NumArray.prototype.sumRange = function(left, right) {
  console.log('sum', left, right, this.getSum(right) - this.getSum(left - 1));
  return this.getSum(right) - this.getSum(left - 1);
};

let numsArray = new NumArray([1, 3, 5, 7, 9, 1, 1, 1, 1, 1]);
console.log("proceed", numsArray);
numsArray.sumRange(0, 5);
// numsArray.update(1, 2);
// numsArray.sumRange(0, 2);
