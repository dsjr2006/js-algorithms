var theArray = [5,10,15,20,25,30,35,40,45,50]
var avg = 0
var count = 0
theArray.forEach(function (item, index, array) {
	count ++;
	avg +=	item;
})
avg = avg / count;
console.log(avg);