var sentance = "hello world";
var camelcase = [];
String.prototype.camelCase = function(){
	var word = sentance.split(" ")
	word.forEach(function(word){
		var camel = word.charAt(0).toUpperCase() +word.slice(1).toLowerCase();
		camelcase.push(camel)
	});
	return camelcase.join("");
}
console.log(sentance.camelCase());