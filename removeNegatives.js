var arr = [1,2,3,0,-10,-9,7,9];


function removeNegatives(a) {
	var count = 0;
	for (var i = 0; i < a.length; i++) {
		console.log('checking');
		if (a[i] < 0) {
			count ++;
			console.log('found negative');
		}
		else {
			a[i-count] = a[i]
		}
	}
	a.length = a.length - count;
	return a
}

console.log(removeNegatives(arr));