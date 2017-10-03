var spinWords = "Hey fellow warriors"
//spinWords( "This is a test") => returns "This is a test" 
//spinWords( "This is another test" )=> returns "This is rehtona test"
var str = spinWords.split(" ");
function reverse(str){
	var word = []
	str.forEach(function(n){
		if (n.length > 4){
			var letter = n.split("").reverse().join("");
			word.push(letter);
		}else{
			word.push(n)
		}
	});
		return word
}
console.log(reverse(str));

