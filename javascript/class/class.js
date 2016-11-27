'use strict';

function Sample() {
    this.name = 'surya';
    this.publicMethod = function() {
       return  console.log('publicMethod');
    }
    this.age = function(age) {
        return console.log(this.name," age is", age);
    }
}

Sample.speaks = function(language) {
   return console.log(this.name, 'Person speaks', language);
}

Sample.prototype.run = function(speed){
    return console.log(this.name,'Person runs with', speed);
}

try {
   // console.log(Sample.age(30)); //sample.age is not a function
   console.log(Sample.speaks('german'));
   // console.log(Sample.run('30')); // run is not a function
} catch (e) {
  console.log(e);
} finally {
	var surya = new Sample();
    // console.log(surya.speaks('german')); //speaks undefined
    console.log(surya.run('30')); // defined
    console.log(surya.age('24')); // defined
}

