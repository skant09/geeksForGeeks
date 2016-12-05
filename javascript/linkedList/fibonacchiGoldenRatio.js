const phi = (1 + Math.sqrt(5)) / 2;
var arr = Array(50).fill().map((x, i) => i);
arr.forEach(function(v, i) {
    console.log(nthFibonnacchi(v));
});

function nthFibonnacchi(n) {
    var x = Math.pow(phi, (n)) / Math.sqrt(5);
    var y = Math.round(x);
    return y;
}
