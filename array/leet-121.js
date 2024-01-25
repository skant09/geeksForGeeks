/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let minimumPrice = prices[0];
//     let maxProfitEachDay = 0;
//     for(let i =0;i<prices.length;i++){
//         let profit = prices[i]-minimumPrice;
//         console.log({profit, maxProfitEachDay});
//         maxProfitEachDay = Math.max(maxProfitEachDay, profit)
//         minimumPrice = Math.min(minimumPrice, prices[i]);
//     }
//     return maxProfitEachDay;
// };

var maxProfit = function(prices) {
    var ahead = [0, 0], curr = [0, 0];
    for(let i = prices.length-1; i>-1; i--){
        // buy on i sell on i+1 vs sell on i+1
        curr[0] = Math.max(ahead[1]-prices[i], ahead[0])

        // not buy on i, sell on i+1
        curr[1] = Math.max(ahead[0]+prices[i], ahead[1])
        console.log(curr);
        ahead = curr
    }
    return Math.max.apply(null, curr);
    
};

const ans = maxProfit([7,1,5,3,6,4]);
console.log(ans);