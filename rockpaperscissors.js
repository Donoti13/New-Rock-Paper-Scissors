
var rockBtn = document.getElementById("rockBtn");
var paperBtn = document.getElementById("paperBtn");
var scissorsBtn = document.getElementById("scissorsBtn");


var playerSelection;
var computerChoice;


//GET COMPUTER RANDOM SELECTION

function getComputerChoice() {

  let randomValue = Math.floor(Math.random() * 3);


if (randomValue === 2) {
  computerChoice = "rock";
} 

 else if (randomValue === 1) {
  computerChoice = "paper";
 }

  else {
       computerChoice = "scissors";
  }

  console.log(computerChoice);
}


//getComputerChoice();


computerSelection = getComputerChoice();



//GET PLAYER SELECTION

  rockBtn.addEventListener('click', () => {

    playerSelection = "rock";
    console.log("you pressed rock!");
  
    playRound();

 });

  paperBtn.addEventListener('click', () => {

    playerSelection = "paper";
    console.log("you pressed paper!");
    playRound();
});

  scissorsBtn.addEventListener('click', () => {

    playerSelection = "scissors";
    console.log("you pressed scissors!");


    playRound();
});



/*
function playerSelection() {

  if (playerSelection = rockBtn) {
    return rockBtn;
  }
   if (playerSelection = paperBtn) {

    return paperBtn;
  }
    if (playerSelection = scissorsBtn) {
    return scissorsBtn;
  }

  else { 
    return "wrong";
  }
}

console.log(playerSelection());
*/



function playRound() {
  // LINKKIG GAME COMPARISONS

//function playGame() {
  if (playerSelection == "rock" &&  computerChoice == "rock" || 
    playerSelection == "paper" && computerChoice == "paper" || 
    playerSelection == "scissors" && computerChoice == "scissors") {
    
      console.log("draw");
  }

  if (playerSelection === "rock" &&  computerChoice === "scissors" || 
    playerSelection === "paper" && computerChoice === "rock" || 
    playerSelection === "scissors" && computerChoice === "paper") {


      console.log("you win");
  } 

if (playerSelection === "rock" &&  computerChoice === "paper" || 
    playerSelection === "paper" && computerChoice === "scissors" || 
    playerSelection === "scissors" && computerChoice === "rock") {


      console.log("pc win");
  } 

}

//console.log(playRound());




//PLAY GAME

//































/*

let userChoice = document.querySelector("game");

//We're taking the userInput and converting it to lowercase letters and storing it within userChoice
function getUserChoice(userInput){
  let playerSelection = userInput.toLowerCase();
    
  if(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")
    
    {return playerSelection;}
    
    }


//We're making a number and converting it to an eqvivalent string
function getComputerChoice(){
  let computerSelection = Math.floor(Math.random()*3);
    if(computerSelection === 1){return "rock";}
    else if(computerSelection === 2){return "scissors";}
    else if(computerSelection === 3){return "paper";}
        else{return "Input not valid.";}
}

//Determining the winner based upon the input and the computer's choice
function playRound(playerSelection, computerSelection){
    //Having a tie
    if (playerSelection === computerChoice){return "It's a tie!";}
    //If the user types in scissors
  else if(playerSelection === "scissors"){
    if(computerSelection === "rock"){return "Computer wins! Rock kills scissors.";}
    else if(computerSelection ==="paper"){return "User wins! Scissors kill paper.";}
  }
    //If the user types in paper
  else if(playerSelection === "paper"){
    if(computerSelection === "rock"){return "User wins! Paper kills rock.";}
    else if(computerSelection === "scissors"){return "Computer wins! Scissors kill paper.";}
  }
    //If the user types in rock
  else if(playerSelection === "rock"){
    if(computerSelection === "paper"){return "Computer wins! Paper kills rock.";}
    else if(computerSelection === "scissors"){return "User wins! Rock kills scissors."};
  }
}

//Function that embodies the other functions and executes the game.
//function playGame(){
 // console.log(`You chose ${playerSelection}`);

//playGame();


function game() {
  playerSelection = getUserChoice;
  computerSelection = getComputerChoice;
  playRound (playerSelection, computerSelection);
  scoreboard = "User: " + userScore + "!     Computer: " + computerScore + "!";
  console.log(scoreboard);
  console.log(gameResult);
  
  playRound (playerSelection, computerSelection);
  scoreboard = "User: " + userScore + "!     Computer: " + computerScore + "!";
  console.log(scoreboard);
  console.log(gameResult);
  
  playRound (playerSelection, computerSelection);
  scoreboard = "User: " + userScore + "!     Computer: " + computerScore + "!";
  console.log(scoreboard);
  console.log(gameResult);
  
  playRound (playerSelection, computerSelection);
  scoreboard = "User: " + userScore + "!     Computer: " + computerScore + "!";
  console.log(scoreboard);
  console.log(gameResult);

  playRound (playerSelection, computerSelection);
  scoreboard = "User: " + userScore + "!     Computer: " + computerScore + "!";
  console.log(scoreboard);
  console.log(gameResult);
}
*/

/*

let computerChoice;
let playerChoice;
let userScore = 0;
let computerScore = 0;
let scoreboard;
let gameResult;
let playerSelection; 
let computerSelection;


function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);   
  if (x === 1) {
      computerChoice = "rock";
  }
  else if (x === 2) {
      computerChoice = "paper";
  }
  else if (x === 3){
      computerChoice = "scissors";
  }
//  else {
//      computerChoice = "broken";
 // }
  display.log(computerChoice);
}


  playerChoice = prompt("Type rock/paper/scissors", "paper").toLowerCase();
  console.log(playerChoice);

function getPlayerChoice() {
  return playerChoice; 
}

function playRound (playerSelection, computerSelection) {
  playerSelection = playerChoice;
  computerSelection = computerChoice;
  if ((playerChoice === "rock") && (computerChoice === "scissors")) {
      userScore = userScore + 1;
      gameResult = "You Win! Rock beats Scissors!";
  }

  else if ((playerChoice === "scissors") && (computerChoice === "paper")) {
      userScore = userScore + 1;
      gameResult = "You Win! Scissors beats Paper!";
  }

  else if ((playerChoice === "paper") && (computerChoice === "rock")) {
      userScore = userScore + 1;
      gameResult = "You Win! Paper beats Rock!";
  }

  else if ((playerChoice === "scissors") && (computerChoice === "rock")) {
      computerScore = computerScore + 1;
      gameResult = "You Lose! Rock beats Scissors!";
  }

  else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
      computerScore = computerScore + 1;
      gameResult = "You Lose! Scissors beats Paper!";
  }

  else if ((playerChoice === "rock") && (computerChoice === "paper")) {
      computerScore = computerScore + 1;
      gameResult = "You Lose! Paper beats Rock!";
  }

  else if ((playerChoice === "rock") && (computerChoice === "rock")) {
      gameResult = "Draw!";
  }

  else if ((playerChoice === "paper") && (computerChoice === "paper")) {
      gameResult = "Draw!";
  }

  else if ((playerChoice === "scissors") && (computerChoice === "scissors")) {
      gameResult = "Draw!";
  }

  else {
      gameResult = "Input Error!";
  }
}




function game() {

  
  playerSelection = playerChoice;
  computerSelection = computerChoice;

  //playRound(playerSelecton, computerSelection);

  scoreboard = "User: " + userScore + "! Computer: " + computerScore + "!";

  console.log(scoreboard);
  console.log(gameeResult);

}
*/

/*
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
  let opJogo = ['rock', 'paper', 'scissors'];
  let escolhaJogo = opJogo(Math.floor(Math.random() * opJogo.length));
  return(escolhaJogo);
}


function playRound(playerSelection, computerSelection) {

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerPoints++;
    return("You lose! Paper beats Rock.");
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerPoints++;
    return("You lose! Rock beats Scissors.");
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerPoints++;
    return("You lose! Scissors beats Paper.");
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerPoints++;
    return("You Win! Rock beats scissors");
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerPoints++;
    return("You Win! Scissors beats Paper");
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerPoints++;
    return("You Win! Paper beats Rock");
  } else {
    return("It's a tie!");
  }

}


function game() {

  const playerSelection = String(prompt("Rock, Paper, Scissors?")).toLowerCase();
  const computerSelection = getComputerChoice();
  return (console.log(playRound(playerSelection, computerSelection)));
}

for (let i=0; i < 5; i++) game(i);

if (playerPoints > computerPoints) {
  console.log("You won, nice!")
} else if (playerPoints < computerPoints) {
  console.log("You lose, try again!")
} else {
  console.log("It's a tie! Play again")
}
*/


/*
// GET RANDOM COMPUTER CHOICE SELECTION

function getComputerChoice() {

  randomValue = Math.floor(Math.random() * 3);


if (randomValue === 2) {

  console.log("rock");
} 

 else if (randomValue === 1) {

  console.log("paper");
 }

  else {

      console.log("scissors");
  }

}
  getComputerChoice();



  // CREATE A PROMPT FOR USER TO ENTER CHOICE

  playerChoice = prompt("Type rock/paper/scissors", "paper").toLowerCase();
  console.log(playerChoice);

function getPlayerChoice() {
  return playerChoice; 
}



// PROVIDE VARIOUS OPTIONS FOR GAME OUTCOME

let playerSelection;

playerSelection = playerChoice;
const computerSelection = getComputerChoice();
const computerChoice = computerSelection;

/*function playRound(playerSelection, computerSelection) {
   
  if ((playerChoice === "rock") && (computerChoice === "scissors")) {
      return("You Win! Rock beats Scissors!");
  }

  else if ((playerSelection === "scissors") && (computerChoice === "paper")) {
    return("You Win! Scissors beats Paper!");
  }

  else if ((playerSelection === "paper") && (computerChoice === "rock")) {
    return("You Win! Paper beats Rock!");
  }

  else if ((playerSelection === "scissors") && (computerChoice === "rock")) {
    return("You Lose! Rock beats Scissors!");
  }

  else if ((playerSelection === "paper") && (computerChoice === "scissors")) {
    return("You Lose! Scissors beats Paper!");
  }

  else if ((playerSelection === "rock") && (computerChoice === "paper")) {
    return("You Lose! Paper beats Rock!");
  }

  else if ((playerSelection === "rock") && (computerChoice === "rock")) {
    return("Draw!");
  }

  else if ((playerSelection === "paper") && (computerChoice === "paper")) {
    return("Draw!");
  }

  else if ((playerSelection === "scissors") && (computerChoice === "scissors")) {
    return("Draw!");
  }

  else {
    return("Input Error!");
  }
}
*/
//console.log(playRound(playerSelection, computerSelection));


// CREATE FUNCTION GAME

/*
let playerPoints;
let computerPoints;

function game() {

  i = rounds;
  for (let i=0; i < 5; i++);
  
  if ((playerChoice === "rock") && (computerChoice === "scissors")) {
    playerPoints++;
    console.log("You Win! Rock beats Scissors!");
}

else if ((playerSelection === "scissors") && (computerChoice === "paper")) {
  playerPoints++;
  console.log("You Win! Scissors beats Paper!");
}

else if ((playerSelection === "paper") && (computerChoice === "rock")) {
  playerPoints++;
  console.log("You Win! Paper beats Rock!");
}

else if ((playerSelection === "scissors") && (computerChoice === "rock")) {
  computerPoints++;
  console.log("You Lose! Rock beats Scissors!");
}

else if ((playerSelection === "paper") && (computerChoice === "scissors")) {
  playerPoints++;
  console.log("You Lose! Scissors beats Paper!");
}

else if ((playerSelection === "rock") && (computerChoice === "paper")) {
  computerPoints++;
  console.log("You Lose! Paper beats Rock!");
}

else if ((playerSelection === "rock") && (computerChoice === "rock")) {
  console.log("Draw!");
}

else if ((playerSelection === "paper") && (computerChoice === "paper")) {
  console.log("Draw!");
}

else if ((playerSelection === "scissors") && (computerChoice === "scissors")) {
  console.log("Draw!");
}

else {
  console.log("Input Error!");
}

//console.log(game);


}
console.log(game);

//console.log(playRound(playerSelection, computerSelection));


function result () {
if (playerPoints > computerPoints) {
  console.log("You won, nice!")
} else if (playerPoints < computerPoints) {
  console.log("You lose, try again!")
} else {
  console.log("It's a tie! Play again")
}

}

*/

/*

function toUpper(string) {

  return string.toUpperCase();
}

const cats = ["Leopard", "Lion", "Jaguar", "TIger"];

const upperCats = cats.map(toUpper);

  console.log(upperCats); 

*/

/*
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Lion", "Jaguar", "TIger"];

const filtered = cats.filter(lCat);

console.log(filtered);

*/

/*

const container = document.querySelector("#container");

const content = document.createElement('p');

content.classList.add("content");

content.textContent = "Hey I am Red";

content.style.cssText = "color: Red;";


container.appendChild(content);




const newe = document.createElement('h3');

newe.classList.add("newe");

newe.textContent = "I am BLUE H3";

newe.style.cssText = "color: blue";

container.appendChild(newe, content);



const div = document.createElement('div');

div.style.cssText = "background: pink"; 

div.style.border = "4px solid brown";



div.classList.add("div");


const anotherh = document.createElement('h1');

anotherh.classList.add("anotherh")

anotherh.textContent = "I AM A DIV";

anotherh.style.cssText = "color: green";


const anotherp = document.createElement('p');

anotherp.classList.add("anotherp");

anotherp.textContent = "ME TOO";

anotherp.style.cssText = "color: orange";


div.appendChild(anotherh);

div.insertBefore(anotherp, anotherh);

container.appendChild(div, newe, content);

/*
ANOTHER h1 THE SAYS I AM a div

a <p> that says "ME TOO"

Hint for this: after creating the div with createElement 
appent hte h1 and p to it before adding it to the container
*/

/*
const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {

  e.target.style.background = 'blue';
} );

*/

/*
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

button.addEventListener('click', () => {

  alert(button.id);
});

});
*/

/*
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

button.addEventListener('click', () => {

  alert(button.id);

});

});



*/

/*
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

button.addEventListener('click', () => {

  alert(button.id);

});

});


*/

/*
//WORKS BUTTON COLOR CHANGE ALSO WITH MULTIPLE BUTTONS

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

button.addEventListener('click', function (e) {
  e.target.style.background = 'blue';

});

});




 
<div>

<button id="1">Click Me</button>
<button id="2">Click Me</button>
<button id="3">Click Me</button>
</div>

*/