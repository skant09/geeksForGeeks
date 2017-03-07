'use strict';
/**
 * @class Node Constructor for a given Node in BST
 * @constructor Node
 * @param {number/string} value value of a given node in a BST
 */
function Node(value) {
    this.node = value;
    this.left = null;
    this.right = null;
    this.show = function() {
        return this.node;
    };
}
/**
 * @class Binary Search Tree
 * @constructor BST
 * @property {Node} root -defines the root of BST
 * @property {number} horizontalPosition - postion relative to root on a horizontal plane
 * @property {function} insert  - inserts new node in BST
 */
function BST() {
    this.root = null;
    /*
      @member Method
     */
    this.insert = insert;
    this.inOrder = inOrder;
    this.find = find;
    this.getMin = getMin;
    this.getMax = getMax;
    this.checkBalance = checkBalance;
    this.maxHeight = maxHeight;
    this.nodeHeight = function(data){
	   return  maxHeight(this.find(data))
    }
}
/**
 * Insert function for BST
 * @param  {number/string} data -value to be inserted in BST
 * @return {null}      returns nothing
 */
function insert(data) {
    var n = new Node(data, null, null);
    // if no root, create root
    if (this.root === null) {
        this.root = n;
    } else {
        // start from root, traverse and insert
        var current = this.root;
        var parent;
        // keep itrating unless reach null
        while (true) {
            parent = current;
            if (data <= current.node) {
                current = current.left;
                if (current === null) {
                    parent.left = n;
                    console.log('left', parent.node, n );
                    // break while loop
                    break;
                }
            } else {
                current = current.right;
                if (!current) {
                    parent.right = n;
                    console.log('right', parent.node, n );
                    // break while loop
                    break;
                }
            }
        }
        // this.checkBalance(this);
    }
    // console.log(data, n.horizontalPosition);
}

function inOrder(node, cb) {
    if (node) {
        inOrder(node.left, cb);
        if (cb && typeof cb === 'function') {
            cb(node);
        } else if (!cb) {
            console.log('*', node.show(), ' ', node.horizontalPosition, node.depth);
        } else {
            throw new Error('Callback is not a function');
        }
        inOrder(node.right, cb);
    }
    return 'done';
}

function preOrder(node) {
    if (node) {
        console.log('*', node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
    return 'done';
}

function postOrder(node) {
    if (node) {
        postOrder(node.left);
        postOrder(node.right);
	console.log(node.show());
    }
    return 'done';
}


function find(data) {
    var current = this.root;
    while (current.node !== data) {
        if (current.node > data) {
            current = current.left
        } else {
            current = current.right
        }
        if (!current) return data + ' notFound';
    }
    console.log('find method', current);
    return current;
}

function getMin() {
    var current = this.root;
    while (current.left) {
        current = current.left;
    }
    return current.node;
}

function getMax() {
    var current = this.root;
    while (current.right) {
        current = current.right;
    }
    return current.node;
}

/**
 * AVL tree rotation
 */
function rightRotation(node) {
    var temp = node;
    node = temp.left;
    node.left = temp.left.left;
    node.right = temp.right;
}

function rightRotation(node) {
    var temp = node;
    node = temp.right;
    node.right = temp.right.right;
    node.left = temp.left;
}

function checkBalance(bst) {
    let parent = bst.parent;
    // console.log('checkBalance', bst);
    bst.inOrder(this.root, function(node) {
        if (!node.left && !node.right) {
            node.height = 0
        } else if (!node.left) {
            node.height = node.right.height ? (node.right.height + 1) : 0;
        } else if (!node.right) {
            node.height = node.left.height ? (node.left.height + 1) : 0;
        } else {
            node.height = Math.max(node.left.height, node.right.height) + 1;
        }
        console.log('here', node.node, node.height);
        debugger;
    });
    while (parent) {
        if (!(parent.left)) {
            parent.left = {
                depth: 0
            }
        };
        if (!parent.right) {
            parent.right = {
                depth: 0
            }
        };
        if ((parent.left.depth - parent.right.depth) > 1) {
            return rightRotation(node);
        }
        if ((parent.left.depth - parent.right.depth) < -1) {
            return leftRotation(node);
        }
        parent = parent.parent
    }
}

function maxHeight(node){
	if(!node){
		return 0;
	}
	var leftHeight = maxHeight(node.left);
	var rightHeight = maxHeight(node.right);
	return leftHeight > rightHeight ? leftHeight+1 : rightHeight+1;
}


var arr = [ 23, 1, 100, 45, 16, 37, 3, 99, 22, 105];
var nums = new BST();
arr.forEach(function(v, i) {
    nums.insert(v);
});
console.log("inOrder traverse :", inOrder(nums.root));
console.log("preOrder traverse :", preOrder(nums.root));
console.log("postOrder traverse :", postOrder(nums.root));
console.log("maxHeight", nums.nodeHeight(16));
// console.log('find', nums.find(100));

// console.log(nums);
// console.log(nums.find(3));
// console.log(nums.find(30));
// console.log(nums.find(99));
// console.log(nums.getMax());
// console.log(nums.getMin());
