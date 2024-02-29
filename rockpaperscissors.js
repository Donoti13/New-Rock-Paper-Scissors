
var rockBtn = document.getElementById("rockBtn");
var paperBtn = document.getElementById("paperBtn");
var scissorsBtn = document.getElementById("scissorsBtn");


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



computerSelection = getComputerChoice();



//GET PLAYER SELECTION

  rockBtn.addEventListener('click', () => {
  
  if(gamerounds<= 4){

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
    
 
}else{
    alert("GAME OVER! Press OK to start another game");
    para.textContent = score;
    paratwo.textContent = "COMPUTER CHOSE" + " " ;
    parathree.textContent = "PLAYER CHOSE" + " " ;
    parawin.textContent = "NUMBER OF WINS: " ;
    paralosses.textContent = "NUMBER OF LOSSES: " ;
    pararesult.textContent = "GAME RESULT: " ;
    location.reload(true);
}

 });

  paperBtn.addEventListener('click', () => {
   
  if(gamerounds<= 4){

    playerSelection = "paper";
    console.log("you pressed paper!");
    playRound();
    playgame();
    para.textContent = score; 
    paratwo.textContent = "COMPUTER CHOSE" + " " + computerChoice;
    parathree.textContent = "PLAYER CHOSE" + " " + playerSelection;
    parawin.textContent = "NUMBER OF WINS: " + wins;
    paralosses.textContent = "NUMBER OF LOSSES: " + losses;
    pararesult.textContent = "GAME RESULT: " + gameres;
 
  }else{
    alert("GAME OVER! Press OK to start another game");
    para.textContent = score;
    paratwo.textContent = "COMPUTER CHOSE" + " " ;
    parathree.textContent = "PLAYER CHOSE" + " " ;
    parawin.textContent = "NUMBER OF WINS: " ;
    paralosses.textContent = "NUMBER OF LOSSES: " ;
    pararesult.textContent = "GAME RESULT: " ;
    location.reload(true);
}
});

  scissorsBtn.addEventListener('click', () => {

  if(gamerounds<= 4){

    playerSelection = "scissors";
    console.log("you pressed scissors!");
    playRound();
    playgame();
    para.textContent = score;
    paratwo.textContent = "COMPUTER CHOSE" + " " + computerChoice;
    parathree.textContent = "PLAYER CHOSE" + " " + playerSelection;
    parawin.textContent = "NUMBER OF WINS: " + wins;
    paralosses.textContent = "NUMBER OF LOSSES: " + losses;
    pararesult.textContent = "GAME RESULT: " + gameres;
    
  }else{
    alert("GAME OVER! Press OK to start another game");
    para.textContent = score;
    paratwo.textContent = "COMPUTER CHOSE" + " " ;
    parathree.textContent = "PLAYER CHOSE" + " " ;
    parawin.textContent = "NUMBER OF WINS: " ;
    paralosses.textContent = "NUMBER OF LOSSES: " ;
    pararesult.textContent = "GAME RESULT: " ;
    location.reload(true);
    }
});



var wins = 0;
var losses = 0;

 
var score = "";

var gamerounds = 0;

  // LINKIG GAME - COMPARISONS

function playRound() {

  getComputerChoice();

 if (gamerounds <= 5){

    if (playerSelection == "rock" &&  computerChoice == "rock" || 
    playerSelection == "paper" && computerChoice == "paper" || 
    playerSelection == "scissors" && computerChoice == "scissors") {
    score = "ROUND RESULT: DRAW";
    gamerounds += 1;
    console.log("draw");
        
  }

  if (playerSelection === "rock" &&  computerChoice === "scissors" || 
    playerSelection === "paper" && computerChoice === "rock" || 
    playerSelection === "scissors" && computerChoice === "paper") {
    gamerounds += 1;
    wins++;
    score = "ROUND RESULT: YOU WIN";
    console.log("you win"); 
     
  } 

if (playerSelection === "rock" &&  computerChoice === "paper" || 
    playerSelection === "paper" && computerChoice === "scissors" || 
    playerSelection === "scissors" && computerChoice === "rock") {
    gamerounds += 1;
    losses++;
    score = "ROUND RESULT: PC WIN";
    console.log("pc win");
    
  } 
}
};




console.log("You have won " + wins + " games!");
console.log("You have lost " + losses + " games!");

var numberwins = ["You have won " + wins + " games!"];
var numberloss = ["You have lost " + losses + " games!"];


 

var results = "";
var gameres = "";


function playgame() {

  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i <= 5; i++) {

    
      playerScore = wins;
    
      computerScore = losses;

 

    if (playerScore == computerScore) {
    
      console.log("GAMES ARE TIED");
      gameres = "GAMES ARE TIED!";
    
      
  }
    else if (playerScore > computerScore) {

      console.log("YOU WON MORE GAMES!");
      gameres = "YOU WON MORE GAMES!";
    
      
  }
    else if (playerScore < computerScore) {
    
      console.log("YOU LOST MORE GAMES!");
      gameres = "YOU LOST MORE GAMES!";
      
  };

};
};



playgame();

  if (wins > losses) {
   
    console.log("You won more games!");
    results = "You won more games!";
  
 
 }
 
 else if (wins < losses) {
 
   console.log("You lost more games");
   results = "You lost more games";
 
 }
 
 else {

   console.log("Its a draw!");
   results = "Its a draw!"; 
    
 };

  


 const container = document.querySelector('#container');

 const content = document.createElement('div');
 
 content.classList.add('content');

 content.textContent = "ROCK PAPER SCISSORS GAME";
 
 container.appendChild(content);
 
 container.style.backgroundColor = "brown";
 
 
 
 
 var para = document.createElement("p");
 
 para.textContent = "ROUND RESULT: ";
 
 container.appendChild(para);
 
 para.style.backgroundColor = "blue";
 
  
 
 
 var paratwo = document.createElement('p');
 
 paratwo.textContent = "COMPUTER CHOICE: ";
 
 container.appendChild(paratwo);
 
 paratwo.style.backgroundColor = "red";

   


 var parathree = document.createElement('p');

 parathree.textContent = "PLAYER CHOICE: ";
 
 container.appendChild(parathree);

 parathree.style.backgroundColor = "pink";
 



 var parawin = document.createElement('p');

 parawin.textContent = "NUMBER OF WINS: ";
 
 container.appendChild(parawin);

 parawin.style.backgroundColor = "green";
 



 var paralosses = document.createElement('p');

 paralosses.textContent = "NUMBER OF LOSSES: ";
 
 container.appendChild(paralosses);

 paralosses.style.backgroundColor = "yellow";

  



 var pararesult = document.createElement('p');

 pararesult.textContent = "GAME WINS: ";

 container.appendChild(pararesult);

 pararesult.style.backgroundColor = "orange";

 pararesult.class = "pararesult";




