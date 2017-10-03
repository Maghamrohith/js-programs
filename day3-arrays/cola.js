var names = ["seldon","leonard","penny","rajesh","howard"];
var i = 0;
var r = 6;
var res = "seldon";
while(i< r){
	var person = names.shift();
    names.push(person,person);
i++;
     
}
console.log(names[0]);
