function Node(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

Node.prototype.show = function(){
	console.log(this.value);
}

function BST(){
	this.root = null;
	this.insert = insert;
	// this.find = find;
	this.inOrder = inOrder;
}

function insert(value){
	var node = new Node(value);

	if(this.root === null){
	   this.root = node;
	   return;
	}
	var current = this.root;
	var parent;
	while(true){
		parent = current;
		if(value <= current.value){
			current = current.left;
			if(current === null){
				parent.left = node;
				// console.log(current, node);
				break;
			}
		} else {
			current = current.right;
			if(current === null){
				parent.right = node;
				break;
			}
		}
	}
}

function inOrder(node){

	if(node !== null){
		//nsole.log('while', node.value, node);
		this.inOrder(node.left);
		console.log(node.value);
		this.inOrder(node.right);
	}
	return;
}

var arr = [45, 25, 35, 43, 56];
var myBST = new BST();
arr.forEach(v => {
       	myBST.insert(v);
	// console.log(myBST);
});
myBST.inOrder(myBST.root);
// console.log(myBST);
