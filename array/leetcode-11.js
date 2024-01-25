/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const leftMax = [height[0]]; rightMax=[], maxHeight= [];
    for(var i = 0; i<height.length; i ++){
        if(height[i]>leftMax[i-1]){
            leftMax[i] = height[i];
        } else {
            leftMax[i] = leftMax[i-1] || height [0];
        }
    }
    for(var i = height.length-1; i>-1; i --){
        if(height[i]>rightMax[i+1]){
            rightMax[i] = height[i]
        } else {
            rightMax[i] = rightMax[i+1] || height[height.length-1];
        }
    }
    for(var i = 0; i<height.length; i ++){
        maxHeight[i] = Math.min(leftMax[i], rightMax[i])
    }
    maxHeight = new Set(maxHeight)
    console.log({leftMax, rightMax, maxHeight})
    
};
const ans = maxArea([1,8,6,2,5,4,8,3,7]);
console.log(ans);