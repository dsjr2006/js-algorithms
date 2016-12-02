var arr = [1,2];
var count = 0;
function reverseIt(x) {
	for (var i = x.length-1; i > -1; i--) {
		if (count == i || count == i+1) {
			console.log('break');
			break
		}
		var temp = x[count];
		x[count] = x[i];
		x[i] = temp;
		count ++;
	}
	return x
}
console.log(reverseIt(arr));