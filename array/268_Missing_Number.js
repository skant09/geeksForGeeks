/**
 * 268. Missing Number
 * 
 * Given an array nums containing n distinct numbers in the range [0, n], 
 * return the only number in the range that is missing from the array.
 * 
 */


/**
 * 
 * Since the numbers are from 1:n and place them in right position
 * find the number which is not in right position
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const length = nums.length;
    for(let i=0; i<length;i++){
        let num = nums[i];
        [nums[i], nums[num]] = [nums[nums], nums[i]]
    }
    return nums.find((num, index)=>num!==index)
};

const nums = [3,0,1];

missingNumber(nums);