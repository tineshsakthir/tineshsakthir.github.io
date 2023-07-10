const playerOne = {
  Display : document.querySelector("#playerOne"),
  Score : 0 ,
  IncrementButton : document.querySelector("#playerOneButton")
}
const playerTwo ={
  Display :document.querySelector("#playerTwo"),
  Score :  0 ,
  IncrementButton : document.querySelector("#playerTwoButton")
}
//End Score Selector
let targetScoreSelector = document.querySelector("#scoreSelector");
// Initializing the score variables
let targetScore = targetScoreSelector.value;
//check for game over
let gameOver = false

//Selecting the buttons for increment
let resetButton = document.querySelector("#resetButton")

targetScoreSelector.addEventListener('change', (evt) => {
    targetScore  = parseInt(evt.target.value);
    reset();
});

resetButton.addEventListener("click",reset)

function reset(){  
  gameOver = false;
  playerOne.Score = 0;
  playerTwo.Score = 0;
  playerOne.Display.textContent = 0;
  playerTwo.Display.textContent = 0;
  playerOne.Display.classList.remove("looser","winner")
  playerTwo.Display.classList.remove("winner","looser")
}



const updateScore = (player,opponent)=>{
  if(!gameOver){
    player.Score +=1;
    player.Display.textContent = player.Score;
  }
  if(player.Score == targetScore){
    gameOver = true;
    player.Display.classList.add("winner");
    opponent.Display.classList.add("looser");
  }

}


playerOne.IncrementButton.addEventListener("click",()=>{
  updateScore(playerOne,playerTwo)

});
playerTwo.IncrementButton.addEventListener("click",()=>{
  updateScore(playerTwo,playerOne)
});



