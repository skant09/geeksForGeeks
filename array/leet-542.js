/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const m = mat.length;
  const n = mat[0].length;

  const dist = Array(m).fill(0);
  for (let i = 0; i < m; i++) dist[i] = Array(n).fill(null);

  function findDistance(i, j) {
    if (mat[i][j] === 0) {
      dist[i][j] = 0;
      return dist[i][j];
    }
    if (dist[i][j] !== null) return dist[i][j];

    let distance = [];
    if (j + 1 < n) {
      if (mat[i][j + 1] === 0) {
        distance[0] = 1;
      } else {
        distance[0] = 1 + findDistance(i, j + 1);
      }
    } else {
        distance[0]=1e32
    }

    if (i + 1 < m) {
      if (mat[i + 1][j] === 0) {
        distance[1] = 1;
      } else {
        distance[1] = 1 + findDistance(i + 1, j);
      }
    } else {
        distance[1]=1e32;
    }

    if (j - 1 > -1) {
      distance[2] = 1 + dist[i][j - 1];
    }

    if (i - 1 > -1) {
      distance[3] = 1 + dist[i - 1][j];
    }

    dist[i][j] = Math.min(distance[0], distance[1], distance[2], distance[3]);
    return dist[i][j];
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dist[i][j] === null) {
        dist[i][j] = findDistance(i, j);
      }
    }
  }
  console.log(dist);
  return dist;
};
updateMatrix([
  [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
  ]
]);
