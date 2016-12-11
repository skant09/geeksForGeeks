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
    this.horizontalPosition = null;
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
    this.horizontalPosition = 0;
    /*
      @member Method
     */
    this.insert = insert;
    this.inOrder = inOrder;
    this.find = find;
    this.getMin = getMin;
    this.getMax = getMax;
}
/**
 * Insert function for BST
 * @param  {number/string} data -value to be inserted in BST
 * @return {null}      returns nothing
 */
function insert(data) {
    var n = new Node(data, null, null);
    // if no root, create root
    if (!this.root) {
        this.root = n;
        n.horizontalPosition = 0;
    } else {
        // start from root, traverse and insert
        var current = this.root;
        var parent;
        // keep itrating unless reach null
        while (true) {
            parent = current;
            if (data <= current.node) {
                current = current.left;
                if (!current) {
                    parent.left = n;
                    n.horizontalPosition = parent.horizontalPosition - 1;
                    // console.log(parent.node, n.node, parent.horizontalPosition, n.horizontalPosition);
                    // break while loop
                    break;
                }
            } else {
                current = current.right;
                if (!current) {
                    parent.right = n;
                    n.horizontalPosition = parent.horizontalPosition + 1;
                    // console.log(parent.node, n.node, parent.horizontalPosition, n.horizontalPosition);
                    // break while loop
                    break;
                }
            }
        }
    }
    // console.log(data, n.horizontalPosition);
}

function inOrder(node) {
    if (node) {
        inOrder(node.left);
        console.log('*', node.show(), ' ', node.horizontalPosition);
        inOrder(node.right);
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
        console.log('*', node.show());
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
    return data + ' found';
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


var arr = [23, 1, 100, 45, 16, 37, 3, 99, 22, 105];
var nums = new BST();
arr.forEach(function(v, i) {
    nums.insert(v);
});
console.log("inOrder traverse :", inOrder(nums.root));
// console.log("preOrder traverse :", preOrder(nums.root));
// console.log("postOrder traverse :", postOrder(nums.root));
// console.log(nums);
// console.log(nums.find(3));
// console.log(nums.find(30));
// console.log(nums.find(99));
// console.log(nums.getMax());
// console.log(nums.getMin());
