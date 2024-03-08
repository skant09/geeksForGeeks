/**
 * @param {number[]} arr **arr** to search in
 * @param {number} k **k** elements to return
 * @param {number} x **x** to search for
 * @return {number[]} array of number to be returned
 */
var findClosestElements = function(arr, k, x) {
  let left = 0;
  let right = arr.length - 1;
  if (right + 1 <= k) return arr;
  if (x > arr[right]) return arr.slice(right - k, 0);
  if (x < arr[left]) return arr.slice(0, k);

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === x) {
      // find k closest both left and right
      if(k === 1) return [arr[mid]];
      left = mid;
      right = mid;
    } else if (arr[mid] < x) {
      // find x/2 left and x/2 right
      left = mid + 1;
    } else if (arr[mid] > x) {
      right = mid - 1;
    }
  }
  // x lies between left and right
  while (right - left < k) {
    if (right >= arr.length - 1) {
      right--;
      left--;
    }
    if (left <= 0) {
      left++;
      right++;
    }
    console.log({ left, right }, "in");
    // if (left < 0 && right >= arr.length) break;
    if (Math.abs(arr[right] - x) >= Math.abs(x - arr[left])) {
        left--;
    } else {
        right++;
    }
  }
  console.log({ left, right }, "out");
  return arr.slice(left, right);
};
// const ans = findClosestElements([1, 1, 2, 3, 3, 3, 4, 6, 8, 8], 6, 1);
const ans = findClosestElements([1,1,1,10,10,10], 1, 9);
console.log(ans);
