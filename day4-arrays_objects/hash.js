

var str = "virat virat sachin sachin virat"
var players = str.split(" ");
var player_hash = {}
players.forEach(function(player){
	if(!(player in player_hash)){
		player_hash[player] = players.filter(function(n){
			return n == player
		}).length;
	}
})
console.log(player_hash);