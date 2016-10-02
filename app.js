	var i;
	var sum = 0;
	// Initialize i to 1, checks condition until it reaches 1000 and i is incremented by 1
	for(i=1; i <= 1000;i++){
		sum = i + sum;
	}
	console.log("Sum upto 1000 using for Loop = " +sum);
	
	var x = 1;
	var total = 0;
	// while loop will checks the condition first, then the following statements will be executed, if condition is true.
	while(x <= 1000) {
		total += x;
		x++; // Increments x value by 1
	}
	console.log("Sum upto 1000 using while Loop = " +total);
