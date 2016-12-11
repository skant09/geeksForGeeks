var test = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 334, 234, 17, 19, 10000000000000000];
var primeNumbers = [2];

test.forEach(function(v, i) {
    console.log('prime check', v, checkPrime(v));
});

function checkPrime(p) {
    var root = Math.ceil(Math.sqrt(p));
    if (p === 1) return false;
    if (p === 2) return true;
    if (p === 3) return true;
    // console.log('inside checkPrime', p, root);
    for (var i = 2; i <= root; i++) {
        // console.log('i', i);
        if (p % i === 0) {
            return false;
        }
    }
    return true;
}

var input = "3 13"
processData(input);

function processData(input) {
    var x = parseInt(input.split(' ')[0], 10);
    var y = parseInt(input.split(' ')[1], 10);
    var numberOfPrime = 0;
    while (x < y) {
        if (checkPrime(x)) {
            if (checkPrime(x + 2) && x + 2) {
                numberOfPrime++;
            }
        }
        x++;
    }
    console.log(numberOfPrime);
}
