const phi = (1 + Math.sqrt(5)) / 2;
var arr = Array(100).fill().map((x, i) => i);


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

// using recursion
function nthFibonnacchi3(n) {
    if (n < 2) {
        return n;
    } else {
        return nthFibonnacchi3(n - 1) + nthFibonnacchi3(n - 2);
    }
}

// dynamic programming
function nthFibonnacchi4(n) {
    if (n > 0) {
        var val = Array(n).fill(0);
        val[1] = 1;
        val[2] = 1;
    } else {
        return 0;
    }
    if (n > 3) {
        for (var i = 3; i < n; i++) {
            val[i] = val[i - 1] + val[i - 2];
        }
    }
    return val[n - 1] + val[n - 2];
}


// console.log(nthFibonnacchi(100));
// console.log(nthFibonnacchi2(100));
// console.log(nthFibonnacchi3(100));
// console.log(nthFibonnacchi4(5));

arr.forEach(function(v, i) {
    console.log(nthFibonnacchi(v), nthFibonnacchi2(v), nthFibonnacchi4(v));
});
