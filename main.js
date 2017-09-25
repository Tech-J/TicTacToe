var tiles = document.querySelectorAll('.box');
console.log(tiles)
var reset = document.querySelector('#reset');
var toggle = true;

var label = function(event){

	if(toggle){
		event.target.innerText = "X";
		event.target.id = "x";
		toggle = false;
		event.target.removeEventListener("click", label ,false);}

	else{
		event.target.innerText = "O";
		event.target.id = "o";
		toggle = true;
		event.target.removeEventListener("click", label ,false);}

	var newTiles = document.querySelectorAll('.box');

	if ((newTiles[0].innerText == 'X' && newTiles[1].innerText == "X" && newTiles[2].innerText == "X") ||
		(newTiles[3].innerText == "X" && newTiles[4].innerText == "X" && newTiles[5].innerText == "X") ||
		(newTiles[6].innerText == "X" && newTiles[7].innerText == "X" && newTiles[8].innerText == "X") ||
		(newTiles[0].innerText == "X" && newTiles[3].innerText == "X" && newTiles[6].innerText == "X") ||
		(newTiles[1].innerText == "X" && newTiles[4].innerText == "X" && newTiles[7].innerText == "X") ||
		(newTiles[2].innerText == "X" && newTiles[5].innerText == "X" && newTiles[8].innerText == "X") ||
		(newTiles[0].innerText == "X" && newTiles[4].innerText == "X" && newTiles[8].innerText == "X") ||
		(newTiles[2].innerText == "X" && newTiles[4].innerText == "X" && newTiles[6].innerText == "X")){
			alert("Player X has won");
			cleanboard();
			toggle = true;}

	else if((newTiles[0].innerText == 'O' && newTiles[1].innerText == "O" && newTiles[2].innerText == "O") ||
			(newTiles[3].innerText == "O" && newTiles[4].innerText == "O" && newTiles[5].innerText == "O") ||
			(newTiles[6].innerText == "O" && newTiles[7].innerText == "O" && newTiles[8].innerText == "O") ||
	 		(newTiles[0].innerText == "O" && newTiles[3].innerText == "O" && newTiles[6].innerText == "O") ||
	 		(newTiles[1].innerText == "O" && newTiles[4].innerText == "O" && newTiles[7].innerText == "O") ||
	 		(newTiles[2].innerText == "O" && newTiles[5].innerText == "O" && newTiles[8].innerText == "O") ||
	 		(newTiles[0].innerText == "O" && newTiles[4].innerText == "O" && newTiles[8].innerText == "O") ||
	 		(newTiles[2].innerText == "O" && newTiles[4].innerText == "O" && newTiles[6].innerText == "O")){
			alert("Player 0 has won");
			cleanboard();
			toggle = false;} }


var cleanboard = function(){
	tiles.forEach(function(eraseboard2){
	eraseboard2.removeEventListener("click", label ,false);})}



var reset1 = function(){
	var resetTiles = document.querySelectorAll('.box');
	resetTiles.forEach(function(resetTiles1){
		resetTiles1.innerText= " ";
		resetTiles1.id = " ";
	resetTiles1.addEventListener("click", label ,false);
	})}



//This function starts the game/ Adds click events to html element for "X" and '"O" / Add Click Event to the reset button
var gameStart = function(){
    tiles.forEach(function(tile){
    tile.addEventListener("click", label , false);
    })
    reset.addEventListener("click", reset1 , false);
}



gameStart()
