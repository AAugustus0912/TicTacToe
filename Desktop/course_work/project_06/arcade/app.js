//used to select ALL the tiles - line 2
const tiles = document.querySelectorAll(".tile");
const board = document.querySelector("#board");
let isX = 'X';
const oPlayer = 'O';
let turn = isX;
const players= document.querySelectorAll(".players");


function grabNames() {
    

    console.log(players[0].value)
    console.log(players[1].value)
}

const startButton = document.getElementById("second_button");
startButton.addEventListener("click", grabNames);

//The array is 9 items because we have 9 tiles
const boardState = Array(tiles.length);
// boardState.fill(null);

const strike = document.getElementById("strike");
const gameOver = document.getElementById("game-over");
const gameOverMess = document.getElementById("game-over-mess");
const playAgain = document.getElementById("play-again");
playAgain.addEventListener("click", startNewGame);

//Event Listeners "listen" for some kind of even
// like a mouse click so it can respond accordingly
function startNewGame(){
    strike.className = "strike";
    gameOver.className = "hidden";
    boardState.fill(null);
    tiles.forEach((tile) => (tile.innerText = ""));
    isX = 'X';

}
//The forEach() method calls a function for each element in an array

tiles.forEach((tile) => tile.addEventListener("click", tileClick));


function tileClick(event) {
    console.log(event)
    if (gameOver.classList.contains("visible")) {
       return; 
    }

    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if (tile.innerText != "") {
        return;
    }
    if (isX === 'X') {
        tile.innerText =isX;
        boardState [tileNumber - 1] = isX;
        isX = oPlayer;
    }
    else {
        tile.innerText = oPlayer;
        boardState[tileNumber - 1] = oPlayer;
        isX = 'X'
    }
    checkWinner();
}
// line 51 declaring the constant to extract the winningKeys below
// lines 53-57 causing the strikethrough
function checkWinner(){
    for (const winningKey of winningKeys){

        const {combination, strikeClass } = winningKey;

        const tileValue1 = boardState[combination[0] - 1];
        const tileValue2 = boardState[combination[1] - 1];
        const tileValue3 = boardState[combination[2] - 1];

        if (
        tileValue1 != null && 
        tileValue1 === tileValue2 && 
        tileValue1 === tileValue3) {
        strike.classList.add(strikeClass);
        gameOverBrows(tileValue1)
        return;
        }
    }
    // Cat's game
const allTilesFull = boardState.every ((tile) => tile !=null);
if (allTilesFull){
    gameOverBrows(null);
}


}
// If winner text null, it stays as cat's game, but if not its x or o
function gameOverBrows(winnerMess){
    let mess = "Cat's Game!"
    if (winnerMess != null){
        mess = `The Winner Is ${winnerMess}!`;
    }
    gameOver.className = "visible";
    gameOverMess.innerText = mess;
}

// for the Play Again button to work
function startNewGame(){
    strike.className = "strike";
    gameOver.className = "hidden";
    boardState.fill(null);
    tiles.forEach((tile) => (tile.innerText = ""));
    isX = 'X';

}

const winningKeys = [
    {combination:[1,2,3], strikeClass: "strike-row-1"},
    {combination:[4,5,6], strikeClass: "strike-row-2"},
    {combination:[7,8,9], strikeClass: "strike-row-3"},

    {combination:[1,4,7], strikeClass: "strike-column-1"},
    {combination:[2,5,8], strikeClass: "strike-column-2"},
    {combination:[3,6,9], strikeClass: "strike-column-3"},

    {combination:[1,5,9], strikeClass: "strike-diagonal-1"},
    {combination:[3,5,7], strikeClass: "strike-diagonal-2"},    
];





// var btn = document.querySelector("button");
// var firsttext = [];

// btn.addEventListener("click", function(){
//   var player1 = document.getElementById("firsttext");
//   var player2 = document.getElementById("secondtext");
  
//   if (player1.value != "" && player2.value != "") {
//     firsttext.push(player1.value);
//     firsttext.push(player2.value);
//     alert(firsttext);
//     return firsttext;
//   } else {
//   	alert("Enter players' names");
//   }
	
// });

//board.addEventListener("click", tileClick);