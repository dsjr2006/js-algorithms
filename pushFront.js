var arr = [1,2,3,4,5];

for (var i = 0; i < (arr.length); i++) {
	temp = arr[i+1];
	arr[i+1] = arr[i];
	arr[i] = temp;
}
	
console.log(arr);



