function tribonacci(n) {
    var triboSeries = new Array(n+3);
    triboSeries[0] = 0;
    triboSeries[1] = 1;
    triboSeries[2] = 1;
    console.log(triboSeries,triboSeries.length, n);
    for (var i = 2; i <= n; i += 1) {
        console.log(triboSeries, i);
        triboSeries[n] = triboSeries[n - 1] + triboSeries[n - 2] + triboSeries[n - 3];
    }
    return triboSeries[n];
}
;
var result = tribonacci(4);
console.log(result);
