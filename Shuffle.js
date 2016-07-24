
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
function dealer(arr){
  var numPass = 0;
  while (numPass < 2){
  for (var i=0; i< arr.length; i++){
  	var doBy = Math.floor(Math.random() * arr.length);
    var temp = arr[doBy];
    arr[doBy] = arr[i];
    arr[i] = temp;
  }
    numPass++;
  }
  console.log(arr);
  return
}
dealer(arr);