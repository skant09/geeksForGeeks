/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const swap = function(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

var permute = function(nums) {
  const result = [];
  function generatePermute(init, remaining) {
    const ans = [];
    if (!init) return generatePermute([], remaining);
    if (remaining.length === 0) return init;
    if (remaining.length === 1) return [...init, ...remaining];
    for (let i = 0; i < remaining.length; i++) {
      swap(remaining, 0, i);
      const [first, ...remain] = remaining;
      ans.push(generatePermute([...init, first], remain));
      swap(remaining, i, 0);
    }
    return ans;
  }
  return generatePermute(null, nums);
};

const ans = permute([1, 2, 3]);
console.log(ans);
