var util = require("util");

var bst = function()
{
	this.root = null;
};

var Node = function(key, val)
{
	this.key = key;
	this.val = val;
	this.left = null
	this.right = null;	
};

bst.prototype.insert = function(key, val) 
{
	var root = this.root;
	
	if (!root)
	{
		this.root = new Node(key, val);
		return true;
	}
	
	var currentNode = root;
	
	while (currentNode)
	{
		if (key < currentNode.key)
		{
			if (!currentNode.left)
			{
				currentNode.left = new Node(key, val);
				break;
			}
			else
			{
				currentNode = currentNode.left;
			}
		}
		else if (key > currentNode.key)
		{
			if (!currentNode.right)
			{
				currentNode.right = new Node(key, val);
				break;
			}
			else
			{
				currentNode = currentNode.right;
			}
		}
		else if (key == currentNode.key)
		{
			currentNode.val = val;
			break;
		}
	}
}


bst.prototype.inOrder = function (node)
{
	if (node)
	{
		this.inOrder(node.left);
		console.log(node.val + "  ");
		this.inOrder(node.right);
	}
};

bst.prototype.minNode = function(node)
{
	if (node.left)
	{
		return this.minNode(node.left);
	}
	
	return node.val;
}

bst.prototype.maxNode = function(node)
{
	if (node.right)
	{
		return this.maxNode(node.right);
	}
	
	return node.val;
}

bst.prototype.lookup = function (key)
{
	var currentNode = this.root;
	
	while (currentNode)
	{
		if (currentNode.key == key)
		{
			return currentNode.val;
		}
		else if (key > currentNode.key)
		{
			currentNode = currentNode.right;
		}
		else if (key < currentNode.key)
		{
			currentNode = currentNode.left;
		}
	}
	
	return false;
}

bst = new bst();

bst.insert(4, 'Four');
bst.insert(1, 'One');
bst.insert(9, 'Nine');
bst.insert(7, 'Seven');
bst.insert(8, 'Eight');
bst.insert(12, 'Twelve');

console.log('\n\n---- Tree ----\n\n')
console.log(util.inspect(bst, {showHidden: false, depth: null}));

// can be used to implement a sort
bst.inOrder(bst.root);

console.log ('\nmin: ' + bst.minNode(bst.root));
console.log ('\nmax: ' + bst.maxNode(bst.root));

console.log('\n7 lookup: ' + bst.lookup(7));
console.log('\n9999 (not found) lookup: ' + bst.lookup(9999));
