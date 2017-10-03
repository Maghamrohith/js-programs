var n1 = 10;
var n2 = 12.3;
var n3 = 13.6;

console.log(typeof n1.toString()); //"string"
console.log(typeof n1); //"number"
console.log(typeof n2); //"number"
console.log(10 == 10.0); //"true"

// number tostring

console.log(n1.toString()); //"10"
console.log(String(n1));   //"10"

// string to number

var n4 = "15"
var n5 = "16.7"
console.log(parseInt(n4)); //15
console.log(Number(n4)); // 15

console.log(parseInt(n5)); // 16
console.log(Number(n5)); // 16.7

console.log(parseFloat(n4)); //15
console.log(typeof parseFloat(n4)); // number
console.log(parseFloat(n5)); //16.7
console.log(typeof parseFloat(n5)); //number

// NAN - not a number
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN("a" * 10)); // true

console.log(typeof "a" * 10); // NaN 