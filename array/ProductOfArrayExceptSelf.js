/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const numsLength = nums.length;
    const leftProduct=[], rightProduct = [];
    let temp = 1;
    // create prefix product
    for(let i=0; i<numsLength; i++) {
        leftProduct[i] = temp;
        temp *= nums[i]
    }
    temp = 1
    for(i=numsLength-1; i>-1; i--) {
        rightProduct[i] = leftProduct[i]*temp;
        temp *= nums[i]
        console.log(rightProduct);
    }
    return rightProduct;
};
const nums = [1,2,3,4,5]
productExceptSelf(nums)