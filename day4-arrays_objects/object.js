//name value pair
//in js keys are also treated as properties of objects
var person = {
	firstname: "rohith",
	lastname: "kumar"

}
console.log(person);
console.log("the firstname is " + person.firstname);
console.log("the last name is " + person["lastname"]);

person["middlename"] = "magham";
person.title = "Mr";
console.log(person);

console.log(person.title + ". " +person.firstname +" "+ person.middlename + " " +person.lastname);


var players = {
	virat: 3,
	sachin: 2,
	dhoni: 1
}
// players.each do |key,value|
for(var key in players){
	console.log(key + "appears" + players[key] + "times")
}

