//Prompt the user to get their answer 
//Transform the user answer to something usable
//Create a function that randomly returns rock paper or scissors for the pc answer
//Create a function that takes the answer of the user and the pc
//This function will return an appropriate answer to the inputs received
//The answer will be displayed to the user in an alert

//1. Prompt the user to get their answer //2. Transform the user answer to something usable

function getUserAns(){
    return (prompt("Enter Rock, Paper or Scissors.")).toLowerCase();
}

//3. Create a function that randomly returns rock paper or scissors for the pc answer
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if(x == 0){
        return "rock";
    } else if (x == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

//Create a function that takes the answer of the user and the pc
function playRound() {
    userAns = getUserAns();
    cpuAns = getComputerChoice();

    if(userAns == cpuAns){
        return "It's a Tie!"
    }
    if(userAns == "rock" && cpuAns == "paper"){
        return "You Lose! Paper beats Rock"
    }
    if(userAns == "rock" && cpuAns == "scissors"){
        return "You Win! Rock beats Scissors"
    }
    if(userAns == "paper" && cpuAns == "scissors"){
        return "You Lose! Scissors beat Paper"
    }
    if(userAns == "paper" && cpuAns == "rock"){
        return "You Win! Paper beats Rock"
    }
    if(userAns == "scissors" && cpuAns == "paper"){
        return "You Win! Scissors beat Paper"
    }
    if(userAns == "scissors" && cpuAns == "rock"){
        return "You Lone! Rock beats Scissors"
    }
    
}

//This function will return an appropriate answer to the inputs received
function game() {
    let userPts = 0;
    let cpuPts = 0;
    for(let m=1; m <= 5; m++){
        let x = playRound();
        alert(x);
        if (x[4]== 'W' ) {
            userPts++
        } else if (x[4]== 'L' ) {
            cpuPts++
        } 
    }
    if (userPts > cpuPts) {
        alert(`You: ${userPts}, CPU: ${cpuPts}
        You Win This Match!`);
    } else if (userPts < cpuPts) {
        alert(`You: ${userPts}, CPU: ${cpuPts}
        You Lose This Match!`);
    } else  {
        alert('You Tied!')
    }
}

//The answer will be displayed to the user in an alert
game()