const phi = (1 + Math.sqrt(5)) / 2;
var arr = Array(100).fill().map((x, i) => i);
arr.forEach(function(v, i) {
    console.log(nthFibonnacchi(v), nthFibonnacchi2(v));
});

// first method approximation
function nthFibonnacchi(n) {
    var x = Math.pow(phi, (n)) / Math.sqrt(5);
    var y = Math.round(x);
    return y;
}

//second Method
function nthFibonnacchi2(n) {
    var x = (Math.pow(phi, n) - Math.pow(-phi, -n)) / Math.sqrt(5);
    // var y = Math.round(x);
    return x;
}
