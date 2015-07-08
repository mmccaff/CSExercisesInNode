var fib = function(n)
{
	 var fib0 = 0;
	 var fib1 = 1;
	 var tmp;
	 
	 for (var i = 2; i <= n; i++)
	 {
		 tmp = fib0;
		 fib0 = fib1;
		 fib1 = tmp + fib1;
	 }
	 if (n > 0)
	 {
		 return fib1;
	 }
	 else
	 {
		 return 0;
	 }
}


for (var i=0; i<=45; i++)
{
	console.log("seq " + i + ":" + fib(i));
} 
