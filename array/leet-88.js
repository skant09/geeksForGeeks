/**
 * 88. Merge Sorted Array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let left = m - 1;
  let right = n - 1;

  let k = m + n - 1;

  while (left > -1 || right > -1) {
    if (nums1[left] > nums2[right]) {
      nums1[k] = nums1[left];
      left--;
    } else {
      nums1[k] = nums2[right];
      right--;
    }
    k--;
  }
};
const nums1 = [0];
const m = 0;
const n = 1;
const nums2 = [1];
merge(nums1, m, nums2, n);
console.log(nums1);
