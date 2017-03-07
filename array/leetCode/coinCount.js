/* @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  var lastValidAmount =0, count=0;
  for(var i = 0; i <= amount; i++){
  	var output = getCount(i, coins, lastValidAmount, count);
	lastValidAmount = output.lastValidAmount;
	count = output.count;
	  console.log(i, output);
  }	
  console.log(count, lastValidAmount);
};

function getCount(amount, coins, lastValidAmount, count){
	var temp = lastValidAmount;
  	coins.forEach(coin => {
		if(lastValidAmount + coin === amount) {
			console.log("lastvalidAmount %d coin %d amount %d", lastValidAmount, coin, amount);
			if(temp !== lastValidAmount + coin) {
				temp = lastValidAmount + coin;
			}
      			count++;
		}
  	});
  	return {
		count:count,
		lastValidAmount:temp
  	};
}

change(5, [1,2,5]);
