var sentance = "my name is rohith"

var letter = sentance.split(" ")
var word = letter[0];
letter.forEach(function(n){
	
  if (n.length < word.length){
  	word = n;
  }
return word;  	
});

console.log(word);
