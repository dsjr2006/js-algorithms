var a = [1,2,3,4,5,6];

function rotateArray(arrayPassed, rotate) {
	theArray = arrayPassed
	doBy = rotate
	for (var i = 0; i < rotate; i++) {
		var temp = theArray[i]
		theArray[i] = theArray[theArray.length - doBy]
		theArray[theArray.length - doBy] = temp
		doBy --
	}
	return a
}

console.log(rotateArray(a,2))