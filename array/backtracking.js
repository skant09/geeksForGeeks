var path = [[1, 3], [0, 2], [1], [0, 4, 6], [3, 5, 7], [4], [3], [4, 8], [7]];

function findPath(start, end, maze, currentPath, visitedPath) {
  const nextNode = maze[start];
  for (let index = 0; index < nextNode.length; index++) {
    const element = nextNode[index];
    if (visitedPath.indexOf(end)) findPath(element, end, maze);
  }

  return path;
}
let path = []; // linked list to store sequence of nodes
let visitedPath = [];

findPath(0, 8, path, currentPath, visitedPath);
