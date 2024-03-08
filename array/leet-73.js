/**
 * 
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.
 */

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    console.log(matrix);
    for (let i = n-1; i >-1; i--) {
        for (let j = m-1; j > -1; j--) {
            if (matrix[i][0] === 0 || matrix[0][j]===0) {
                matrix[i][j] = 0;
            }
        }
    }
    console.log(matrix);
};

setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])