var fib = function(n)
{
	var seen = [0, 1, 1];
	
	if (n <= 2)
	{
		return seen[n];
	}
	
	for (var i=2; i < n; i++)
	{	
		seen.push(seen[i] + seen[i-1]);
	}
	
	return seen[n];

}

for (var i=0; i<=45; i++)
{
	console.log("seq " + i + ":" + fib(i));
}