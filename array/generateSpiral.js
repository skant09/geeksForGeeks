const DIR = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Direction matrix to go up, right, down, left

/**
 * Creates a spiral matrix with side length as input
 * @param length length
 * @returns matrix Array
 * 
*/
function spiralMatrix(length) {
  // Creates an empty 2-D matrix of given length
  var squareMatrix = [...new Array(length)].map(i => new Array(length));

  // Number of elements
  const SIZE = length * length;

  // Starting position and dirction chooser
  let x = 0;
  let y = 0;
  let dir = 0;

  // Iterates for all elemnts
  for (var i = 0; i < SIZE; i++) {
    /**
     * Each steps fills the next element, we just need to find correct element to be filled i.e. x and y.
     * */ 
    squareMatrix[x][y] = i + 1;

    /**
     *  next element will be 
     *  next_x = current_x + direction[0]
     *  next_y = current_y + direction[1]
     * 
     * */
    x = x + DIR[dir][0];
    y = y + DIR[dir][1];

    /**
     *  Check for direction, it should not got too much 
     *  left (x < 0)
     *  right (x > length - 1)
     *  top (y < 0)
     *  bottom (y > length -1)
     *  and should remain inside square matrix
     * 
     *  If the pointer goes outside, comeback one step and change direction,
     * 
     * */
    if (x < 0 || y < 0 || x >= length || y >= length || squareMatrix[x][y]) {
      x = x - DIR[dir][0];
      y = y - DIR[dir][1];
      dir = (dir + 1) % 4;
      x = x + DIR[dir][0];
      y = y + DIR[dir][1];
    }
  }
  return squareMatrix;
}
let spiralMatrix_1 = spiralMatrix(4);
console.table(spiralMatrix_1);
