var squareMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
squareMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function rotateCounterClock(matrix) {
  // validated that the matrix is square
  const size = matrix.length;
  let rotatedMatrix = [...new Array(size)].map(i => [[...new Array(size)]]);
  matrix.forEach((row, rowIndex) => {
    row.forEach((ele, columnIndex) => {
      rotatedMatrix[rowIndex][columnIndex] =
        matrix[columnIndex][size - 1 - rowIndex];
    });
  });
  return rotatedMatrix;
}
function rotateClockWise(matrix) {
  // validated that the matrix is square
  const size = matrix.length;
  let rotatedMatrix = [...new Array(size)].map(i => [[...new Array(size)]]);
  matrix.forEach((row, rowIndex) => {
    row.forEach((ele, columnIndex) => {
      rotatedMatrix[rowIndex][columnIndex] =
        matrix[size - 1 - columnIndex][rowIndex];
    });
  });
  return rotatedMatrix;
}
console.log(rotateCounterClock(squareMatrix));
console.log();
console.log(rotateClockWise(squareMatrix));
