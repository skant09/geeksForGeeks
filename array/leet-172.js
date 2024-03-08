/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let pow = 1
    let ans = 0;
    while( Math.floor(n/ Math.pow(5, pow)) >= 1) {
        ans += Math.floor(n/Math.pow(5, pow))
        pow += 1
    }
    
    return ans;
};
var trailingZeroes = function(n) {
    return n == 0 ? 0 : n / 5 + trailingZeroes(n / 5);
}

trailingZeroes(12);