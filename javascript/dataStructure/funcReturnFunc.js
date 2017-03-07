'use strict';
var currentSum = 0;
function sum(x){
	currentSum = currentSum + x;
	console.log(currentSum);
	return sum;
}

sum(3)(2)(5);
console.log(currentSum);
