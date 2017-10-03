var n1 = 12.3;
var n2 = 14;
var n3 = 13.6



//math.random()
console.log(Math.round(n1));//returns the value of x rounded to its nearest integer

console.log(Math.ceil(n1));// returns the value of x rounded up to its nearest number
console.log(Math.sqrt(64)); // return the square root of x
console.log(Math.floor(n3)); // return the value of x rounded down to its nearest number
console.log(Math.pow(2,3)); // retutn the value of x to the power of y;
console.log(Math.abs(-125)); // return the absolute(positive) value of x;
//can be used to find the lowest or the highest value in a list of arguments
console.log(Math.min(24,45,33,4,6));
console.log(Math.max(24,45,33,4,6));
console.log(Math.random()); // returns a random numberr between 0 (inclusive), and 1 (exclusive)
// random number 1 - 100
console.log(Math.round(Math.random() * 100))