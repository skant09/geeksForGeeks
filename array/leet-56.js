/**
 * 56. Merge Intervals
 * @param {number[][]} points
 * @return {number}
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let rootIndex = 0;
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let previous = intervals[rootIndex];
    if (current[0] <= previous[1]) {
      // merge the interval if current starting is less than previous ending
      previous = [previous[0], Math.max(current[1], previous[1])];
      intervals[rootIndex] = previous;
      intervals[i] = 0;
    } else {
      rootIndex = i;
    }
  }
  return intervals.filter(inter => inter !== 0);
};

const points = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
];
const ans = merge(points);
console.log(ans);

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function(intervals) {
//   intervals = intervals.sort((a, b) => a[0] - b[0]);
//   var prev = intervals[0];
//   var res = [prev];

//   for (var curr of intervals) {
//     if (prev[1] >= curr[0]) {
//       prev[1] = Math.max(prev[1], curr[1]);
//     } else {
//       res.push(curr);
//       prev = curr;
//     }
//   }
//   return res;
// };
