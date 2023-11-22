// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 /**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const length = nums.length;
    nums.forEach((num, index) => {
        if(num <= length && nums[num] !== num) {
            nums[index] = num[num-1]
            nums[num-1] = num
        }
    })
    const missing = nums.findIndex((num, i) => {
        return num !== i+1
    })
    if (missing === -1) return nums.length+1;
    return missing+1
};

const nums = [2,1];
console.log(firstMissingPositive(nums));