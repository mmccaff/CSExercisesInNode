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

module.exports = {
    bst: bst,
    Node: Node
};



