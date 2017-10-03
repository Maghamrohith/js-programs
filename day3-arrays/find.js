// for find
 var numbers = [10,20,30,10,20,40]
var result = numbers.find(function(n){
	return n > 15
});
console.log(result);


var result = numbers.find(function(n){
	return n > 55
});

// filter
/*
numbers.find_all {|n| n >= 20}

*/
var results = numbers.filter(function(n){
	return n >= 20;
});

console.log(results);

var results = numbers.filter(function(n){
	return n >= 50;
});

console.log(results);