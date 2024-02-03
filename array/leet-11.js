/**
 * 11. Container With Most Water
 * 
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * 
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * 
 * Return the maximum amount of water a container can store.
 * 
 * Notice that you may not slant the container.
 * 
 * 
 * 
 */
/**
 * 
 * Solution
 * 
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//     const leftMax = [height[0]]; rightMax=[], maxHeight= [];
//     for(var i = 0; i<height.length; i ++){
//         if(height[i]>leftMax[i-1]){
//             leftMax[i] = height[i];
//         } else {
//             leftMax[i] = leftMax[i-1] || height [0];
//         }
//     }
//     for(var i = height.length-1; i>-1; i --){
//         if(height[i]>rightMax[i+1]){
//             rightMax[i] = height[i]
//         } else {
//             rightMax[i] = rightMax[i+1] || height[height.length-1];
//         }
//     }
//     for(var i = 0; i<height.length; i ++){
//         maxHeight[i] = Math.min(leftMax[i], rightMax[i])
//     }
//     maxHeight = new Set(maxHeight)
//     console.log({leftMax, rightMax, maxHeight})
    
// };


/**
 * 
 * Two pointer from left and right
 * calculate the water content based on minHeight(left, right)
 *  Store max water
 *  Move towards max water
 *  
 * 
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left =0, right= height.length-1; maxWater =0;
    while(left < right){
        let width = right -left;
        let h = Math.min(height[left], height[right]);
        water = width * h;
        maxWater = Math.max(maxWater, water);

        if(height[left] < height[right]){
            left++;
        } else {
            right--
        }
    }
    return maxWater;
    
};

const ans = maxArea([1,8,6,2,5,4,8,3,7]);
console.log(ans);