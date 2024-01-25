/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const length = nums.length;
    console.log(length);
    for(let i=0; i<length;i++){
        let num = nums[i];
        [nums[i], nums[num]] = [nums[nums], nums[i]]
        console.log({nums});
    }
    console.log(nums);
    return nums.find((num, index)=>num!==index)
};

const nums = [3,0,1];

missingNumber(nums);