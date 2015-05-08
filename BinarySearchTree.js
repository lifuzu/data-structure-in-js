// reference:
// http://codereview.stackexchange.com/questions/31513/linkedlist-and-binary-search-tree-in-javascript

var Node = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
	return this;
};

Node.prototype.insert = function(newNode) {
	if (newNode.value < this.value) {
		if (this.left === null) {
			this.left = newNode;
		} else {
			this.left.insert(newNode);
		}
	} else if (newNode.value > this.value) {
		if (this.right === null) {
			this.right = newNode;
		} else {
			this.right.insert(newNode);
		}
	} else {
		return true;
	}
};

Node.prototype.depthSearchFirst = function(searchValue) {
	if (this.value === searchValue) {
		return true;
	} else if (searchValue < this.value && this.left !== null) {
		return this.left.depthSearchFirst(searchValue);
	} else if (searchValue > this.value && this.right !== null) {
		return this.right.depthSearchFirst(searchValue);
	} else {
		return false;
	}
};

Node.prototype.inOrderTraversal = function(cb) {
	if (this.left !== null) {
		this.left.inOrderTraversal(cb);
	}
	cb(this.value);
	if (this.right !== null) {
		this.right.inOrderTraversal(cb);
	}
};

Node.prototype.preOrderTraversal = function(cb) {
	cb(this.value);
	if (this.left !== null) {
		this.left.preOrderTraversal(cb);
	}
	if (this.right !== null) {
		this.right.preOrderTraversal(cb);
	}
};

Node.prototype.postOrderTraversal = function(cb) {
	if (this.left !== null) {
		this.left.postOrderTraversal(cb);
	}
	if (this.right !== null) {
		this.right.postOrderTraversal(cb);
	}
	cb(this.value);
};

var BinarySearchTree = function(newNode) {
	if (newNode instanceof Node) {
		this.root = newNode;
	} else {
		this.root = new Node(newNode);
	}
	return this;
};

BinarySearchTree.prototype.insert = function(insertNode) {
	if (insertNode instanceof Node) {
		this.root.insert(insertNode);
	} else {
		this.root.insert(new Node(insertNode));
	}
};

BinarySearchTree.prototype.depthSearchFirst = function(searchValue) {
	this.root.depthSearchFirst(searchValue);
};

BinarySearchTree.prototype.breadthTraversal = function(cb) {
	var queue = [],
		current = this.root;

	if (current !== null) {
		queue.push(current);
	}

	while(queue.length > 0) {
		var tmpNode = queue.shift();
		cb(tmpNode.value);
		if (tmpNode.left !== null) {
			queue.push(tmpNode.left);
		}
		if (tmpNode.right !== null) {
			queue.push(tmpNode.right);
		}
	}
};

BinarySearchTree.prototype.inOrderTraversal = function(cb) {
    this.root.inOrderTraversal(cb);
};

BinarySearchTree.prototype.preOrderTraversal = function(cb) {
    this.root.preOrderTraversal(cb);
};

BinarySearchTree.prototype.postOrderTraversal = function(cb) {
    this.root.postOrderTraversal(cb);
};

module.exports = BinarySearchTree;

// Gotta not hurt dat global namespace
(function(){

    // Example BinBinarySearchTree
    var bst = new BinarySearchTree(50);
    var p = console.log;
    bst.insert(25);bst.insert(75);bst.insert(12);bst.insert(37);bst.insert(87);bst.insert(63);

    console.log("Inorder Traversal");
    bst.inOrderTraversal(p);

    console.log("Preorder Traversal");
    bst.preOrderTraversal(p);

    console.log("Postorder Traversal");
    bst.postOrderTraversal(p);

    console.log("Search for valid (63)");
    bst.depthSearchFirst(63);

    console.log("Search for invalid (19)");
    bst.depthSearchFirst(19);   

    bst.breadthTraversal(p);
})();