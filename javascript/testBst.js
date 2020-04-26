/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root Root node of A BST to be tested
 * @return {boolean} - Predicts if the given BST was true BST or Not
 */
function isValidBST(root) {
  const result = getAllNodes(root);
  const len = result.length;
  if (result[len - 1] > result[len - 2]) {
    return checkIfSorted(result, 1);
  } else {
    return checkIfSorted(result, -1);
  }
}

/**
 * @param {TreeNode} node Root node of A BST to be tested
 * @return {array} - Prints inorder traversal of BST as array
 */
function getAllNodes(node) {
  var result = [];
  function inOrder(node) {
    if (node) {
      inOrder(node.left);
      result.push(node.toString()); // push instead of output.
      inOrder(node.right);
    }
  }

  inOrder(node);
  return result;
}

/**
 * @param {array} inOrderTraversed Root node of A BST to be tested
 * @param {Boolean} order Represents sorting either Ascending or descending
 * @return {boolean} - Checks if inorder traversal is sorted or not
 */
function checkIfSorted(inOrderTraversed, order) {
  var len = arr.length;
  if (len === 1 || len === 0) return true;
  if (order === 1) {
    if (arr[len - 1] > arr[len - 2]) {
      checkIfSorted(arr, 1);
    }
  }
  if (order === -1) {
    if (arr[len - 1] > arr[len - 2]) {
      checkIfSorted(arr, 1);
    }
  }
}
