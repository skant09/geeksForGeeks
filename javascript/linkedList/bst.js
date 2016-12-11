function Node(value, left, right) {
    this.node = value;
    this.left = left ? left : null;
    this.right = right ? right : null;
    this.show = function() {
        return this.node;
    }
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

function insert(data) {
    var n = new Node(data, null, null);
    // if no root, create root
    if (!this.root) {
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
                if (!current) {
                    parent.left = n;
                    // break while loop
                    break;
                }
            } else {
                current = current.right;
                if (!current) {
                    parent.right = n;
                    // break while loop
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (node) {
        inOrder(node.left);
        console.log('*', node.show());
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

var arr = [23, 45, 16, 37, 3, 99, 22];
var nums = new BST();
arr.forEach(function(v, i) {
    nums.insert(v);
});
console.log("inOrder traverse :", inOrder(nums.root));
console.log("preOrder traverse :", preOrder(nums.root));
console.log("postOrder traverse :", postOrder(nums.root));
// console.log(nums);
