function findUniq(players){
	var result = [];
	players.forEach(function(player){
		if(result.indexOf(players) < 0){
			result.push(player);
		}
	});
	return result;
}

var str = "virat virat sachin virat sachin dhoni";
var players = str.split(" ");
var player_hash = {};
var uniq_players = findUniq(players);
uniq_players.forEach(function(player){
	player_hash[player] = players.filter(function(p){
                              return player == p;
                              }).length;		                   
	});
for(key in player_hash){
   console.log(key + " " + "*".repeat(player_hash[key]))
}
