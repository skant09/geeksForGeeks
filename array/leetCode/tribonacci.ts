function tribonacci(n: number): number {
    const triboSeries = new Array(n+2);
    triboSeries[0] = 0;
    triboSeries[1] = 1;
    triboSeries[2] = 1;
    for(let i = 3;i<=n;i+=1 ){
        console.log(triboSeries[i],triboSeries[i-1], i);
        triboSeries[n] = triboSeries[n-1] + triboSeries[n-2] + triboSeries[n-3];
    }
    return triboSeries[n];
};
const result = tribonacci(0);

console.log(result);