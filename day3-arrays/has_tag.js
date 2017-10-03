var sentance = "hello world"
var str = sentance.split(" ")
output = "#"
	str.forEach(function(n){
		output = output+n.charAt(0).toUpperCase() + n.slice(1);

	});
	console.log(output);
