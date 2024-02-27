
var rockBtn = document.getElementById("rockBtn");
var paperBtn = document.getElementById("paperBtn");
var scissorsBtn = document.getElementById("scissorsBtn");


var computerChoice;


//GET COMPUTER RANDOM SELECTION

function getComputerChoice() {

  let randomValue = Math.floor(Math.random() * 3);


if (randomValue === 2) {
  computerChoice = "rock";
 
   
  // playgame();
 // alert("rock");
  
} 

 else if (randomValue === 1) {
  computerChoice = "paper";
 
  
  // playgame();
 // alert("rock");
 }

  else {
   computerChoice = "scissors";
  
   
  // playgame();
  // alert("rock");  
  
 }
  
  console.log(computerChoice);
//  return computerChoice;
}




computerSelection = getComputerChoice();



//GET PLAYER SELECTION



  rockBtn.addEventListener('click', () => {
  //  console.log(computerChoice);
    getComputerChoice();
    playerSelection = "rock";
    console.log("you pressed rock!");
    playRound();
    playgame();
    para.textContent = score;
    paratwo.textContent = "COMPUTER CHOSE" + " " + computerChoice;
    parathree.textContent = "PLAYER CHOSE" + " " + playerSelection;
    parawin.textContent = "NUMBER OF WINS: " + wins;
    paralosses.textContent = "NUMBER OF LOSSES: " + losses;
    pararesult.textContent = "GAME RESULT : " + gameres;
    
    //pararesulttwo.textContent = "GAME RESULT LOSS: " + numberloss;
  //  alert("rock");
 });

  paperBtn.addEventListener('click', () => {
  //  console.log(computerChoice);
    getComputerChoice();
    playerSelection = "paper";
    console.log("you pressed paper!");
    playRound();
    playgame();
 //   alert("paper");
    para.textContent = score; 
    paratwo.textContent = "COMPUTER CHOSE" + " " + computerChoice;
    parathree.textContent = "PLAYER CHOSE" + " " + playerSelection;
    parawin.textContent = "NUMBER OF WINS: " + wins;
    paralosses.textContent = "NUMBER OF LOSSES: " + losses;
    pararesult.textContent = "GAME RESULT: " + gameres;
   // pararesulttwo.textContent = "GAME RESULT LOSS: " + numberloss
    // document.getElementById('container').innerHTML;
});

  scissorsBtn.addEventListener('click', () => {
  //  console.log(computerChoice);
    getComputerChoice();
    playerSelection = "scissors";
    console.log("you pressed scissors!");
    playRound();
    playgame();
  //  alert("scissors");
    para.textContent = score;
    paratwo.textContent = "COMPUTER CHOSE" + " " + computerChoice;
    parathree.textContent = "PLAYER CHOSE" + " " + playerSelection;
    parawin.textContent = "NUMBER OF WINS: " + wins;
    paralosses.textContent = "NUMBER OF LOSSES: " + losses;
    pararesult.textContent = "GAME RESULT: " + gameres;
    //pararesulttwo.textContent = "GAME RESULT LOSS: " + numberloss
    // document.getElementById('container').innerHTML;
});



var wins = 0;
var losses = 0;


/*
for (var x = 0; x < 3; x += 1) {

var playerSelection = prompt("enter selection: rock, paper or scissors", '', [x][0]);

 if (playerSelection == "rock") {
   console.log(computerChoice);
   console.log('you pressed rock');
   playRound();
   getComputerChoice()
 }
 
    else if (playerSelection == "paper") {
      console.log(computerChoice);
    console.log('you pressed paper');
    playRound();
    getComputerChoice()
 }

    else if (playerSelection == "scissors") {
      console.log(computerChoice);
    console.log('you pressed scissors');
    playRound();
    getComputerChoice()
 }

    else {
    console.log('wrong choice!');

 };
}
*/



//console.log(playRound());





 //LOOPING

var score = "";


  // LINKKIG GAME COMPARISONS

function playRound() {
 
    if (playerSelection == "rock" &&  computerChoice == "rock" || 
    playerSelection == "paper" && computerChoice == "paper" || 
    playerSelection == "scissors" && computerChoice == "scissors") {
    score = "Round Result: DRAW";
      console.log("draw");
     // getComputerChoice()
    //  alert("draw");
   
  }

  if (playerSelection === "rock" &&  computerChoice === "scissors" || 
    playerSelection === "paper" && computerChoice === "rock" || 
    playerSelection === "scissors" && computerChoice === "paper") {

      wins++;
      score = "Round Result: YOU WIN";
      console.log("you win");
     // getComputerChoice()
    //  alert("you win");
     
  } 

if (playerSelection === "rock" &&  computerChoice === "paper" || 
    playerSelection === "paper" && computerChoice === "scissors" || 
    playerSelection === "scissors" && computerChoice === "rock") {

      losses++;
      score = "Round Result: PC WIN";
      console.log("pc win");
     // getComputerChoice()
     // alert("pc win"); 
  } 
};




console.log("You have won " + wins + " games!");
console.log("You have lost " + losses + " games!");

var numberwins = ["You have won " + wins + " games!"];
var numberloss = ["You have lost " + losses + " games!"];


//parawin.textContent = wins;
//parawin.textContent = losses;

/*
for (let i = 0; i < 4; i++) {
 
  i = score;
  score = playRound();

};
*/
//computerSelection = getComputerChoice();

var results = "";
var gameres = "";


function playgame() {

  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i <= 5; i++) {

    
    playerScore = wins;
    
    computerScore = losses;

 //   if (i == 5) {break; } {

    if (playerScore == computerScore) {
    
      console.log("GAMES ARE TIED");
      gameres = "GAMES ARE TIED!";
    //  getComputerChoice()
      
  }
    else if (playerScore > computerScore) {

      console.log("YOU WON MORE GAMES!");
      gameres = "YOU WON MORE GAMES!";
    //  getComputerChoice()
      
  }
    else if (playerScore < computerScore) {
    
      console.log("YOU LOST MORE GAMES!");
      gameres = "YOU LOST MORE GAMES!";
     // getComputerChoice()
  };

//};

};
};
playgame();





  if (wins > losses) {
  console.log("You won more games!");
 
  results = "You won more games!";
  
 
 // results.textContent = "You won more games!";
 // pararesult.textContent = "You won more games!";
 // parawin.textContent = "PARAWIN PARAGRAPH: " + wins + "You won more games!";

 }
 
 else if (wins < losses) {
 
  console.log("You lost more games");

    results = "You lost more games";
    
//  results.textContent = "You lost more games";
   //pararesult.textContent = "You lost more games";
 // parawin.textContent = "PARAWIN PARAGRAPH: " + wins + "You lost more games!";

 }
 
 else {
  console.log("Its a draw!");
 
    results = "Its a draw!"; 
    
 // results.textContent = "Its a draw!";
//  pararesult.textContent = "Its a draw!";
 // parawin.textContent = "PARAWIN PARAGRAPH: " + wins + "It's a draw!";

 };


 /*

 function game() {
 
   for (var i = 0; i <= 5; i++) {
 
     i = playRound();
  
     if (i = 5) {
       stop;
 
       console.log("end game");
       gameres = "end game";
     }
     
 };
 
 }
 */



 //var showwin = wins;
 //var showloss = losses;

 //var results = pararesult;


 const container = document.querySelector('#container');

 const content = document.createElement('div');
 
 content.classList.add('content');

 content.textContent = "ROCK PAPER SCISSORS GAME";
 
 container.appendChild(content);
 
 container.style.backgroundColor = "brown";

 // content.appendChild(playRound());
 
 // container.textContent = "testing";
 
 
 
 var para = document.createElement("p");
 
 para.textContent = "ROUND RESULT: ";
 
 container.appendChild(para);
 
 para.style.backgroundColor = "blue";
 
 //para.style.height = '20px';
 
 
 
 var paratwo = document.createElement('p');
 
 paratwo.textContent = "COMPUTER CHOICE: ";
 
 container.appendChild(paratwo);
 
 paratwo.style.backgroundColor = "red";

 //para.style.height = '20px';
 


 var parathree = document.createElement('p');

 parathree.textContent = "PLAYER CHOICE: ";
 
 container.appendChild(parathree);

 parathree.style.backgroundColor = "pink";
 
// para.style.height = '20px';



 var parawin = document.createElement('p');

 parawin.textContent = "NUMBER OF WINS: ";
 
 container.appendChild(parawin);

 parawin.style.backgroundColor = "green";

 //para.style.height = '20px';



 var paralosses = document.createElement('p');

 paralosses.textContent = "NUMBER OF LOSSES: ";
 
 container.appendChild(paralosses);

 paralosses.style.backgroundColor = "yellow";

 //para.style.height = '20px';



 var pararesult = document.createElement('p');

 pararesult.textContent = "GAME WINS: ";

 container.appendChild(pararesult);

 pararesult.style.backgroundColor = "orange";

// pararesult.style.height = '40px';

pararesult.class = "pararesult";















/*
 var pararesulttwo = document.createElement('p');

 pararesulttwo.textContent = "GAME LOSSES: ";

 container.appendChild(pararesulttwo);

 pararesulttwo.style.backgroundColor = "pink";

*/

//let games = playerSelection;
//container.appendChild(games);



//let gamePlay = game;

//container.appendChild(game);


/*

//para.appendChild(playRound());

//container.innerHTML = playRound();

//let gameResult = playRound();
//container.textContent = gameResult;




var game = document.createElement("p");

game.textContent = "THIRD LEVEL testing";

//game = rockBtn;
//rockBtn.textContent = "you pressed rock"

container.appendChild(game);



//computerSelection = getComputerChoice();
//playRound();
//computerChoice];






//const paras = createElementNode("eldone");

//eldone.textContent(getComputerChoice());

//para.appendChild(eldone);

//document.getElementById("container").innerHTML = (computerSelection);




//div.appendChild(playRound());

*/

/*
let score;
let scoreboard;
let userScore;
let pcScore;

function game() {

  for (let i = 0; i < 4; i++) {
 
    i = score;
    score = playRound();

  if (score = "draw") {

    userScore = 0;
    pcScore = 0;
    scoreboard = 
    
  }

  else if (score = "you win") {

    userScore = +1;
    pcScore = 0;
}
  else {

    userScore = 0;
    pcScore = +1;
    
  }
  
 };
};

console.log(game());
*/










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