var password = "secret123"
var firstName = "rohith"
var lastName = "kumar"
var sentence = "this is banglore"
var paragraph = "today is tuesday, today is holiday"

console.log(password.length); // length property of the string not method

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(sentence.indexOf('banglore'));// 8
console.log(sentence.indexOf('chennai'));// -1
console.log(paragraph.indexOf('today')); //0
console.log(paragraph.lastIndexOf('holiday'));
console.log(paragraph.lastIndexOf('is'));

console.log(password.charAt(2)); //c
console.log(sentence.search('banglore')); // 8
console.log(password.includes("secret")); //true

// "*" * 6
console.log("*".repeat(6));
console.log(firstName.repeat(2))


// Extracting from string
var name = "ramchandran"
console.log(name.slice(0,4));// rama starting and not including the last index

console.log(name.slice(4)); // chandran
console.log(name.substring(4));// chandran

console.log(name.substr(2,2)); //ma
console.log(name.substr(2,1)); // m
console.log(name.substr(2,3)); // mac

// capitalize
function capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1);	
}
console.log(capitalize(name));

var numbers = "1234567890"
var n1 = numbers.substr(0,3);
console.log(n1)
var n2 = numbers.substr(3,3);
console.log(n2)
var n3 = numbers.slice(6);
console.log(n3)

console.log("(" + n1 + ")" + " " + n2 + "-" +n3);



 var sentence = "today is tuesday, today is a govt holiday"
 if (sentence.includes("today")){
 console.log("today is present");
 }else {
 	console.log("today not present");

 }
 	if(sentence.indexOf('today') != sentence.lastIndexOf('today')){
 		console.log('today is repeated');
 	} else {
 		console.log('today is not repeated');
 	}


