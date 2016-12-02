var arr = [0,1,2,3,4,5,6,7,8,9];

function nToLast(theArray,n) {
	if (n > 0){
		n++
	return theArray[(theArray.length - n)]
	}
	return theArray[(theArray.length - 1)]	
}

console.log(nToLast(arr,1));