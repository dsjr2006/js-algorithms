function doMult(coolNum) {
	total = 1;
	for (var i = 1; i <= coolNum; i++) {
		total *= i;
	}
	return total;
}
x = 5;
console.log(doMult(x));