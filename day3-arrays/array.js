var numbers = [];

var names = new Array(); // Array.new(ruby)
var names = ["suresh", "ramesh", "mahesh"]
console.log(names[0]);
console.log(names[1]);
names[3] = "veeresh";
console.log(names);

// length is an property of an array
console.log(names.length);
// methods
console.log(typeof names); //'object'
//to know if a variable is an array
console.log(Array.isArray(names)); //true
console.log(names);// changes the state of variable
console.log(names.reverse()); // names = names.reverse();
console.log(names);//changes the state of the variable and works only for alphabets
console.log(names.sort()); //alphabets
console.log(names);
//mutable methods
names.push("jaggesh");// adds new value to the end of the array
names.unshift("ganesh");//add new value to the beginning of the array
console.log(names);

names.pop();//removes the last value from the array
names.shift();//removes the first value from the array
console.log(names);

var nums = new Array(5);
console.log(nums);
nums.fill(10);
console.log(nums);

// array is empty
console.log(nums.length == 0); //false
console.log(numbers.length == 0);// true

console.log(names.indexOf("suresh")); //2
console.log(names.lastIndexOf("suresh")); //2


var numbers = [10,20,30,10,20,40];
 
 function unique(numbers){
 	var num =[];
 	numbers.forEach(function(n){
 		if(num.indexOf(n) < 0){
 			num.push(n);
 		}
 	});
 	return num;
 }

 console.log(unique(numbers));

 names.forEach(function(name){
 	console.log(name.toUpperCase());
 });