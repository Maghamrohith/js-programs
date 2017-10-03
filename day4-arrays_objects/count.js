//var numbers = [10,20,30,40,50,10,10]
//var count = 0;
//numbers.forEach(function(n){
//	if(n == 10){
//		count++;
//	}

//});
//console.log(count);


Array.prototype.count =  function(n){// anonymous functions
	var count = 0;
	this.forEach(function(num){
		if(num == n){
			count++
		}
	});
	return count;
};

var numbers = [10,20,30,40,50,10,10]
var names = ["virat","virat","sachin","sachin","sachin"];
console.log(numbers.count(10));
console.log(numbers.count(20));
console.log(names.count("sachin"));


String.prototype.toCapitalize = function(){
	return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase(); 
};

var name = "sai";
console.log(name.toCapitalize());




Array.prototype.empty = function(){
	return (this.length == 0)
}
var numbers = [];
console.log(numbers.empty());



Array.prototype.last = function(){
return this[this.length-1]
}


var numbers = [10,20,30,10,20]
console.log(numbers.last());



