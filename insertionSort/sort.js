var unsorted = [8, 5, 87, 33, 2, 66, 644, 1, 5];

var insertionSort = function(values)
{	
	for (var i=1; i<=values.length; i++)
	{
		for (var i2=0; i2<=i; i2++)
		{
			if (values[i] < values[i2])
			{
				var oldi;
				var oldi2;
				
				oldi = values[i];
				oldi2 = values[i2];
				
				values[i2] = oldi;
				values[i] = oldi2;
			}
		}
	}
	
	return values;
}

var sorted = insertionSort(unsorted);

console.log(sorted);

