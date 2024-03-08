/***
 * 
 * 322. Coin Change
 * 
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
    if(amount<=0) return 0;
    if(amount===0) return 0;
    const maxAmount = amount;
    const numberOfCoins = [0];
    
    for(let i=1;i<= maxAmount; i++) {
        for(let j=0;j<coins.length; j++){
            numberOfCoins[i] = maxAmount;
            if(coins[j] === i) numberOfCoins[i] = 1;
            if(coins[j] <= i) {
                numberOfCoins[i] = Math.min(numberOfCoins[i], numberOfCoins[i-coins[j]] +1)    
            }
            console.table(numberOfCoins);
        }
    }
    return numberOfCoins[amount];
    // return numberOfCoins[amount] > amount ? -1 : numberOfCoins[amount];
};


// var lengthOfLIS = function(nums) {
//     const LISLength = [1];
//     for(let i=1; i<nums.length; i++){
//         for(let j=0; j<i; j++){
//             if(nums[i] > nums[j] && LISLength[i] < LISLength[i-1]+1){
//                 LISLength[i] = LISLength[i-1]+1;
//             } else {
//                 LISLength[i] = LISLength[i-1]
//             }
//         }
//     }
//     return Math.max.apply(null, LISLength)
// };

// const ans = lengthOfLIS([10,9,2,5,3,7,101,18]);

const ans = coinChange([1,2,5], 2);
console.log(ans);
