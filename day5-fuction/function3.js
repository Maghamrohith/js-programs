//function add(){
	//variable which are defined inside a function is locally available to that function only and is not available outside the function
//	var n1 = 10;
//	var n2 = 20;
//	console.log(n1,n2)
//}
//add();
//uncaught reference n1 is not defined
//console.log(n1);
//console.log(n2);
//variables defined inside a function without the keyword var will make it a global variable,it is made available outside the function


function add(){
	 n1 = 10;
	 n2 = 20;
	console.log(n1,n2)
}
add();
console.log(n1);
console.log(n2);