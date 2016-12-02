var arr = [11,1,2,5,4,5,6,14,8,9,15,100,1100,50,75,500];

function secondLargest(theArr) {
	var maxVal = 0;
	var second = 0;

	for (var i = 0; i < theArr.length; i++) {
		if (theArr[i] > maxVal) {
			maxVal = theArr[i]
		}
	}
	for (var i = 0; i < theArr.length; i++) {
		if (theArr[i] < maxVal && theArr[i] > second) {
					second = theArr[i];
		}
	}
	return second
}
console.log(secondLargest(arr));