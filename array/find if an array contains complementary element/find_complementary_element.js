'use strict';

function findpair(arr, sum) {
    var x = {
        0: 0
    };
    arr.forEach((v, i) => {
        var temp = sum - v;
        if (x[temp] === 1) {
            console.log('pair present', v, temp);
        }
        x[v] = 1;
    });
};

var a = [3, 4, 45, 6, 10, -8, 13];
var sum = 16;
findpair(a, sum);
