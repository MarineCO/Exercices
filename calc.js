

function add(a, b) {
	var result = a + b;
	return result;
 	// ou juste return a + b;
 }

// var param1 = process.argv[2];
// var param2 = process.argv[3];

// add(param1, param2);

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function calc () {
var operation = process.argv[2]

	var x = process.argv[3];
	var y = process.argv[4];

	var a = parseInt(x, 10);
	var b = parseInt(y, 10);
	// Mettre systématiquement le 10 car permet à javascript de s'y retrouver (parmi binaire : base de 0 à 1 = 2, octal : base de 0 à 7 = 8)).
	
	// var result = add(a, b);
	// console.log(result);

	// var result = multiply(a, b);
	// console.log(result);


	if (operation === 'add') {
		console.log(add(a, b));

	}	else if (operation === 'substract') {
		console.log(substract(a, b));

	}	else if (operation === 'multiply') {
		console.log(multiply(a, b));

	} else {
		console.log(divide(a, b));
	}
}

calc(5, 3);