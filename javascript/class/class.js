'use strict';

function Sample(){
	this.name = 'surya';
	/*this.age = function(age){
		console.log("age is", age);
	}*/
}

Sample.age = function(age){
	console.log(this.name ,'Person age is', age);
	return '$';
}

var surya = new Sample();

console.trace(Sample.age(30));
console.trace(Sample.name);
console.trace(surya.name);
console.log(surya.age(24));
