// Exponential Time
var fib = function(n) {
	if (n <= 1)
	{
		return n;
	}
	
	return (fib(n-2) + fib(n-1));
}

for (var i=0; i<=45; i++)
{
	console.log("seq " + i + ":" + fib(i));
}