// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

/**
 * @param {number[]} nums
 * @return {string}
 */
function sortByFirstDigit(nums) {
    return nums.sort((a,b)=>{
        const first = a.toString()+b.toString();
        const second = b.toString()+a.toString();
        return second - first
    })    
}

var largestNumber = function(nums) {
    let arr = sortByFirstDigit(nums);
    if(parseInt(arr.join('')) === 0){
        return 0;
    }
    return arr.join('');
};

const nums = [999999998,999999997,999999999]
console.log(largestNumber(nums));