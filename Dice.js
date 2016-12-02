function randomDice () {
  var x = Math.floor((Math.random()*6)+1);
  var y = Math.floor((Math.random()*6)+1);
  return x+" "+y
}
console.log(randomDice());