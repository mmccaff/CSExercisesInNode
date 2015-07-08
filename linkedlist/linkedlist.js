var Node = function (value, next)
{
	this.value = value;
	this.next = next;
}

var LinkedList = function()
{
	this.head = null;
}

LinkedList.prototype.push = function(value)
{
	
	if (this.head == null)
	{
		this.head = new Node(value, null);
	}
	else
	{
		var currentNode = this.head;
		
		while (currentNode.next != null)
		{
				currentNode = currentNode.next
		}
		
		currentNode.next = new Node(value, null);
	}
}

LinkedList.prototype.insertAfterIfFound = function(searchValue, insertValue)
{
	if (this.head == null)
	{
		return;
	}
	
	var currentNode;
	
	currentNode  = this.head;
	
	while (currentNode)
	{
		if (currentNode.value == searchValue)
		{
			var newNode; 
			newNode = new Node(insertValue, currentNode.next);
			currentNode.next = newNode;
			
			// insert once on first match and ignore multiple matches
			break
		}
		
		currentNode = currentNode.next;
	}
	
	// no insertion if no match
}

LinkedList.prototype.pop = function()
{
	if (this.head == null)
	{
		return;
	}
	
	currentNode = this.head;
	
	while (currentNode.next != null)
	{
		prevNode = currentNode;
		currentNode = currentNode.next;
	}
	
	prevNode.next = null;
	value = currentNode.value;
	currentNode = undefined;
	
	return value;
}

LinkedList.prototype.shift = function()
{
	if (this.head == null)
	{
		return;
	}

	value = this.head.value;
	this.head = this.head.next;
	
	return value;
}

LinkedList.prototype.toArray = function()
{
	var results = [];

	currentNode = this.head;
	
	if (currentNode == null)
	{
		return results;
	}
	
	while (currentNode != null)
	{
		results.push(currentNode.value);
		
		currentNode = currentNode.next;
	}
	
	return results;
}

LinkedList.prototype.count = function()
{
	if (this.head == null)
	{
		return 0;
	}
	
	currentNode = this.head;
	var count = 1;
	
	while (currentNode.next != null)
	{
		currentNode = currentNode.next;
		count++;
	}
	
	return count;
}

list = new LinkedList();

list.push('hello');
list.push('the');
list.push('little');
list.push('red');
list.push('caboose');
list.push('saved');
list.push('the');
list.push('train');
list.push('the');
list.push('end');

// add 'very' after the first instance of 'the'
list.insertAfterIfFound('the', 'very');

console.log(list.toArray());

console.log("pop: " + list.pop());
console.log("pop: " + list.pop());
console.log("shift: " + list.shift());

console.log(list.toArray());

console.log("count: " + list.count())


