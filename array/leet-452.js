/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points = points.sort((a, b) => {
    return a[0] - b[0];
  });

  let result = points.length;
  let previous = points[0];
  for (let index = 1; index < points.length; index++) {
    let current = points[index];
    if (previous[1] >= current[0]) {
      // current point has intersection with previous
      result--;
      console.log({ result, current, previous });
      previous = [current[0], Math.min(current[1], previous[1])];
    } else {
      previous = current;
    }
  }
  return result;
};

const points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12]
];
const ans = findMinArrowShots(points);
