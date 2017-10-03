var winnerlist = [
 {season: '1999-00', team: 'real madrid', country: 'spain'},
 {season: '2000-01', team: 'bayera munich', country: 'germany'},
 {season: '2001-02', team: 'real madrid', country: 'spain'},
 {season: '2002-03', team: 'milan', country: 'italy'},
 {season: '1999-00', team: 'real madrid', country: 'spain'}
]

function countWin(winnerlist, country){
	var list ={};
	var count = 0;
	winnerlist.forEach(function(winner){
		if(winner.country == country){
			count++;
		}
		list[winner.team] = count;
	});
	return list;
}
console.log(countWin(winnerlist, 'spain'))