'use strict';
var a = {
	name: 'surya',
	say : function(){
		console.log(this.name);
	}
}

var func = a.say;
console.log('func');
func(); // error in strict node or undefined in normal mode

a.say(); //surya
a.say.bind({name:'mohan'}); // logs nothing i.e no execution

console.log(a.say); //logs function

console.log(a.say.call({name:'something'})); // logs 'something' \n 'undefined'

a.say.call({name:'ravi'});

a.say(); //surya

a.say = a.say.bind({name:'mohan'});

a.say();
