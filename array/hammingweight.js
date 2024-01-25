/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let hamm = 0
    // if(n>1) hamm=1
    while(n>0){
        if(n%2 > 0) hamm++;
        n = Math.floor(n/2)
    }
    return hamm;
    
};

console.log(parseInt('00000000000000000000000010000000', 2));
console.log(hammingWeight(11));