/**
 * Spiral matrix
 * @param inputMatrix
 */

function spiralCopy(inputMatrix) {
  // your code goes here
  let m = inputMatrix.length;
  let n = inputMatrix[0].length;

  let ROW_MIN = 0;
  let COL_MIN = 0;
  let ROW_MAX = m - 1;
  let COL_MAX = n - 1;

  let DIRECTION = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];
  let DIR = 0;
  let currentRow = 0;
  let currentCol = 0;

  let count = 0;
  let result = [];

  while (count < m * n) {
    result.push(inputMatrix[currentRow][currentCol]);
    currentRow += DIRECTION[DIR][0];
    currentCol += DIRECTION[DIR][1];
    count++;

    console.log(result, count);
    if (
      currentRow < ROW_MIN ||
      currentRow > ROW_MAX ||
      currentCol < COL_MIN ||
      currentCol > COL_MAX
    ) {
      // backtrack
      currentRow -= DIRECTION[DIR][0];
      currentCol -= DIRECTION[DIR][1];

      // change DIRECTION
      DIR = (DIR + 1) % 4;
      currentRow += DIRECTION[DIR][0];
      currentCol += DIRECTION[DIR][1];

      // update row_min, col_min etc
      if (DIRECTION[DIR][0] === 1) {
        ROW_MIN += 1;
      }
      if (DIRECTION[DIR][0] === -1) {
        ROW_MAX -= 1;
      }
      if (DIRECTION[DIR][1] === 1) {
        COL_MIN += 1;
      }
      if (DIRECTION[DIR][1] === -1) {
        COL_MAX -= 1;
      }
    }
  }
  return result;
}
console.log(
  spiralCopy([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
  ])
);
